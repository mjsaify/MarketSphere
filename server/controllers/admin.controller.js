import ApiResponse from "../utils/ApiResponse.js";
import ApiError from "../utils/ApiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import UserModel from "../models/user.models.js";
import ProductModel from "../models/product.model.js";
import OrderModel from "../models/order.model.js";

export const GetAllUsers = asyncHandler(async (req, res, next) => {
    const users = await UserModel.find();

    if (!users) {
        return next(new ApiError(200, "No User Found"));
    };

    return res.status(200).json(new ApiResponse(200, { users }));
});


export const GetUserDetails = asyncHandler(async (req, res, next) => {
    const user = await UserModel.findById(req.params.id);

    if (!user) {
        return next(new ApiError(200, "No User Found"));
    };

    return res.status(200).json(new ApiResponse(200, { user }));
});


export const UpdateUserRole = asyncHandler(async (req, res, next) => {
    const { role } = req.body;

    if (!role) {
        return next(new ApiError(400, "role is required"));
    }

    const user = await UserModel.findByIdAndUpdate(req.params.id, { role }, { new: true, runValidators: true });
    if (!user) {
        return next(new ApiError(404, "User Not Found"));
    };

    return res.status(200).json(new ApiResponse(200, `${user.name} is now ${user.role}`));
});


export const DeleteUser = asyncHandler(async (req, res, next) => {
    const user = await UserModel.findByIdAndDelete(req.params.id);
    if (!user) {
        return next(new ApiError(404, "User Not Found"));
    };

    return res.status(200).json(new ApiResponse(200, "User Deleted Successfully"));
});


export const GetAllOrders = asyncHandler(async (_, res, next) => {
    const orders = await OrderModel.find();
    let totalAmount = 0;

    if (!orders) {
        return next(new ApiError(400, "No Orders Found"));
    };

    orders.forEach((order) => {
        totalAmount += order.pricingDetails.totalPrice;
    });

    return res.status(200).json(new ApiResponse(200, { totalAmount, orders }));
});


export const UpdateOrderStatus = asyncHandler(async (req, res, next) => {
    const order = await OrderModel.findById(req.params.id);

    if (!order) {
        return next(new ApiError(404, "Order Not Found"));
    };

    if (order.orderStatus === "Delivered") {
        return next(new ApiError(400, "Order is already delivered"));
    };

    const product = await ProductModel.findById()

    // update product stock
    if (req.body.status === "Shipped") {
        order.orderItems.forEach(async (o) => {
            const product = await ProductModel.findById(o.product);
            product.stock -= o.quantity;
            await product.save({ validateBeforeSave: false });
        });
    };

    order.orderStatus = req.body.status;

    if (req.body.status === "Delivered") {
        order.deliveredAt = Date.now();
    };

    await order.save({ validateBeforeSave: false });

    return res.status(200).json(new ApiResponse(200, "Order Status Updated"));
});


export const DeleteOrder = asyncHandler(async (req, res, next) => {
    const order = await OrderModel.findByIdAndDelete(req.params.id);

    if (!order) {
        return next(new ApiError(404, "Order Not Found"));
    };

    return res.status(200).json(new ApiResponse(200, "Order Deleted Successfully"));
});
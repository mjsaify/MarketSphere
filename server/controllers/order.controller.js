import OrderModel from '../models/order.model.js';
import ApiError from '../utils/ApiError.js';
import ApiResponse from '../utils/ApiResponse.js';
import { asyncHandler } from '../utils/asyncHandler.js';



export const CreateNewOrder = asyncHandler(async (req, res, next) => {
    const id = req.user.id;
    const { shippingAddress, orderItems, paymentInfo, paidAt, pricingDetails, orderStatus, deliveredAt } = req.body;

    // if ([shippingAddress, orderItems, paymentInfo, paidAt, pricingDetails, orderStatus, deliveredAt].some((field) => field.trim() === "")) {
    //     return next(new ApiError(400, "All Fields are Required"));
    // };

    await OrderModel.create({
        user: id,
        shippingAddress,
        orderItems,
        paymentInfo,
        paidAt,
        pricingDetails,
        orderStatus,
        deliveredAt,
    });

    return res.status(201).json(new ApiResponse(201, "Order Placed Successfully"));
});


export const GetPlacedOrders = asyncHandler(async (req, res, next) => {
    const orders = await OrderModel.find({ user: req.user.id });

    if (!orders) {
        return next(new ApiError(404, "Order Not Found"));
    };

    return res.status(200).json(new ApiResponse(200, { orders }));
});


export const GetOrderDetails = asyncHandler(async (req, res, next) => {
    const order = await OrderModel.findById(req.params.id).populate("user", "name email");

    if (!order) {
        return next(new ApiError(404, "Order Not Found"));
    };

    return res.status(200).json(new ApiResponse(200, { order }));
});
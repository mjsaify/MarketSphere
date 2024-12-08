import OrderModel from '../models/order.model.js';
import ApiError from '../utils/ApiError.js';
import ApiResponse from '../utils/ApiResponse.js';
import { asyncHandler } from '../utils/asyncHandler.js';



export const CreateNewOrder = asyncHandler(async (req, res, next) => {
    const userId = req.user.id;
    const { shippingAddress, orderItems, paymentInfo, paidAt, pricingDetails, orderStatus, deliveredAt } = req.body;

    // if ([shippingAddress, orderItems, paymentInfo, paidAt, pricingDetails, orderStatus, deliveredAt].some((field) => field.trim() === "")) {
    //     return next(new ApiError(400, "All Fields are Required"));
    // };

    await OrderModel.create({
        userId,
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
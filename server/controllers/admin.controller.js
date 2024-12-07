import ApiResponse from "../utils/ApiResponse.js";
import ApiError from "../utils/ApiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import UserModel from "../models/user.models.js";
import ProductModel from "../models/product.model.js";

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
import jwt from 'jsonwebtoken';
import { JWT_SECRET } from '../constant.js';
import UserModel from '../models/user.models.js';
import { asyncHandler } from '../utils/asyncHandler.js';
import ApiError from '../utils/ApiError.js';

export const auth = asyncHandler(async (req, _, next) => {
    const token = req.cookies.token;

    // if cookie is null or token is undefined
    if (!req.cookies || token == undefined) {
        return next(new ApiError(401, "Please login"));
    };

    const decodedToken = jwt.verify(token, JWT_SECRET);
    const user = await UserModel.findById(decodedToken.id).select("-password");
    if (!user) {
        const error = new ApiError(401, "Unauthorized access. User not found");
        return next(error);
    };

    req.user = {
        id: decodedToken.id,
        email: user.email,
    };
    next();
});

export const authorization = (...alowedRoles) => {
    return (req, _, next) => {
        if (!alowedRoles.includes(req.user.role)) {
            return next(new ApiError(403, "Access forbidden, Only admins are allowed"));
        };
        next();
    };
};
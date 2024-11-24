import { UserLoginZodSchema, UserSignupZodSchema } from '../utils/_types.js';
import { asyncHandler } from '../utils/asyncHandler.js';
import ApiResponse from '../utils/ApiResponse.js';
import ApiError from '../utils/ApiError.js';
import { ExtractZodError } from '../utils/ExtractZodError.js';
import UserModel from '../models/user.models.js';
import { CookieOptions } from '../constant.js';


export const UserSignup = asyncHandler(async (req, res, next) => {
    const { name, email, password } = req.body;

    // check empty fields
    if ([name, email, password].some((field) => field.trim() === "")) {
        const error = new ApiError(400, "All Fields are Required");
        return next(error);
    }

    // validate inputs
    const parsedInputs = UserSignupZodSchema.safeParse(req.body);
    if (!parsedInputs.success) {
        // returning detailed error in development for debugging purpose
        // const formatedError = parsedInputs.error.format();
        // const errorMessage = ExtractZodError(formatedError);
        // const error = new ApiError(400, { error: errorMessage }, "Invalid Fields");

        // returning generic error in production
        const error = new ApiError(400, "Invalid Fields");
        return next(error);
    };

    const userExist = await UserModel.findOne({ email: parsedInputs.data.email });
    if (userExist) {
        const error = new ApiError(400, "User already exist");
        return next(error);
    };

    const user = await UserModel.create(parsedInputs.data);
    const token = user.generateToken();


    return res
        .status(201)
        .cookie("token", token)
        .json(new ApiResponse(201, { user: user }, "Account Created Successfully"));
});

export const UserLogin = asyncHandler(async (req, res, next) => {
    const { email, password } = req.body;

    // check empty fields
    if ([email, password].some((field) => field.trim() === "")) {
        const error = new ApiError(400, "All Fields are Required");
        return next(error);
    }

    // validate inputs
    const parsedInputs = UserLoginZodSchema.safeParse(req.body);

    if (!parsedInputs.success) {
        const error = new ApiError(400, "Invalid Fields");
        return next(error);
    };

    const user = await UserModel.findOne({ email: parsedInputs.data.email }).select("+password");
    if (!user) {
        const error = new ApiError(400, "Invalid Credentials");
        return next(error);
    };

    const isPasswordCorrect = user.verifyPassword(parsedInputs.data.password);
    if (!isPasswordCorrect) {
        const error = new ApiError(400, "Invalid Credentials");
        return next(error);
    };

    const token = user.generateToken();
    return res
        .status(200)
        .cookie("token", token, CookieOptions)
        .json(new ApiResponse(200, { user }, "Welcome Back"));
});

export const LogoutUser = asyncHandler(async (req, res, next) => {
    if(!req.user){
        return next(new ApiError(404, "Something went wrong!, user not found"));
    };
    
    return res
        .status(200)
        .clearCookie("token", CookieOptions)
        .json(new ApiResponse(200, "Logout Successfull"));
});
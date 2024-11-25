import { z } from 'zod';
import crypto from 'crypto';
import { UserLoginZodSchema, UserSignupZodSchema } from '../utils/_types.js';
import { asyncHandler } from '../utils/asyncHandler.js';
import ApiResponse from '../utils/ApiResponse.js';
import ApiError from '../utils/ApiError.js';
import { ExtractZodError } from '../utils/ExtractZodError.js';
import UserModel from '../models/user.models.js';
import { CookieOptions } from '../constant.js';
import { SendEmail } from '../utils/SendEmail.js';


export const UserSignup = asyncHandler(async (req, res, next) => {
    const { name, email, password } = req.body;

    // check empty fields
    if ([name, email, password].some((field) => field.trim() === "")) {
        const error = new ApiError(400, "All Fields are Required");
        return next(error);
    };

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
    };

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

    const isPasswordCorrect = await user.verifyPassword(parsedInputs.data.password);
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
    if (!req.user) {
        return next(new ApiError(404, "Something went wrong!, user not found"));
    };

    return res
        .status(200)
        .clearCookie("token", CookieOptions)
        .json(new ApiResponse(200, "Logout Successfull"));
});


export const ForgotPasswordRequest = asyncHandler(async (req, res, next) => {
    const { email } = req.body;
    const schema = z.string().email();
    const parsedInputs = schema.safeParse(email);
    if (!email) next(new ApiError(400, "Email is required"));
    if (!parsedInputs.success) next(new ApiError(400, "Invalid Email"));

    const user = await UserModel.findOne({ email: parsedInputs.data });
    if (!user) next(new ApiError(404, "User Not Found"));

    const resetPasswordToken = user.generateResetPasswordToken();
    await user.save({ validateBeforeSave: false });

    // send email
    try {
        await SendEmail({
            to: user.email,
            subject: "Password Reset Email",
            text: `Your password reset url ${req.protocol}://${req.get("host")}/?reset_password=${resetPasswordToken}`,
        });

        return res.status(200).json(new ApiResponse(200, "Reset password email has been sent"));
    } catch (error) {
        user.resetPasswordToken = undefined;
        user.resetPasswordExpiry = undefined;
        await user.save({ validateBeforeSave: false });
        return next(new ApiError(400, "Email cannot be sent. Please try again later"));
    };

});


export const ResetPassword = asyncHandler(async (req, res, next) => {
    const { reset } = req.query;
    const { newPassword, confirmPassword } = req.body;
    if (reset == undefined || reset.length <= 0) {
        return next(new ApiError(400, "Invalid URL"));
    };

    if ([newPassword, confirmPassword].some((field) => field?.trim() === "")) {
        return next(new ApiError(400, "Fields cannot be empty"));
    };

    if (newPassword !== confirmPassword) {
        return next(new ApiError(400, "Passwords do not match"));
    };

    const parsedInputs = UserSignupZodSchema.pick({ password: true }).safeParse({ password: confirmPassword });
    if (!parsedInputs.success) {
        return next(new ApiError(400, "Invalid Fields"));
    };

    const hashedToken = crypto.createHash("sha256").update(reset).digest("hex");
    const user = await UserModel.findOne({
        resetPasswordToken: hashedToken,
        resetPasswordExpiry: {
            $gt: Date.now(),
        },
    });
    console.log(user)
    if (!user) {
        return next(new ApiError(400, "Invalid or link has been expired"));
    };

    user.password = parsedInputs.data.password;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpiry = undefined;
    await user.save();

    return res.status(200).json(new ApiResponse(200, "Password Reset Successfull"));
});
import mongoose from "mongoose";
import * as argon2 from 'argon2';
import jwt from 'jsonwebtoken';
import { JWT_EXPIRY, JWT_SECRET } from "../constant.js";
import crypto from 'crypto';

const UserSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            maxLength: 100,
            minLength: 4,
            trim: true,
            required: true,
        },
        email: {
            type: String,
            trim: true,
            unique: true,
            required: true,
        },
        password: {
            type: String,
            select: false,
            required: true
        },
        avatar: {
            public_id: {
                type: String,
                required: true,
            },
            url: {
                type: String,
                required: true,
            }
        },
        role: {
            type: String,
            default: "user"
        },
        refreshPasswordToken: String,
        resetPasswordExpiry: Date
    },
    {
        timestamps: true,
    }
);

// hash password
UserSchema.pre("save", async function (next) {
    if (!this.isModified("password")) next();
    this.password = await argon2.hash(this.password);
});

// verify password
UserSchema.methods.verifyPassword = async function (password) {
    return await argon2.verify(this.password, password);
};

// generate jwt
UserSchema.methods.generateToken = function () {
    const payload = {
        id: this._id,
        email: this.email,
    };
    return jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRY })
};

const UserModel = mongoose.model("User", UserSchema);
export default UserModel;
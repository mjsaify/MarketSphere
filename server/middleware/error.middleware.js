import { NODE_ENV } from "../constant.js";
import ApiError from "../utils/ApiError.js";

const DevError = (error, res) => {
    res.status(error.statusCode).json({
        staus: error.status,
        message: error.message,
        stackTrace: error.stack,
        error,
    });
};

const ProdError = (error, res) => {
    if (error.isOperational) {
        res.status(error.statusCode).json({
            staus: error.statusCode,
            message: error.message,
        });
    } else {
        res.status(500).json({
            staus: error.statusCode,
            message: error.message,
        });
    }
};


export default (error, _, res, __) => {
    error.status = error.status || "error";
    error.statusCode = error.statusCode || 500;

    if (NODE_ENV === "development") {
        DevError(error, res);
    } else if (NODE_ENV === "production") {
        if(error.name === "CastError"){
            error = new ApiError(400, `Invalid product id ${error.value}`);
        };
        if(error.name === "JsonWebTokenError"){
            error = new ApiError(400, "Invalid Request");
        };
        ProdError(error, res);
    } else {
        return null;
    }
}
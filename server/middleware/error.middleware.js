import { NODE_ENV } from "../constant.js";

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
        res.status(error.stausCode).json({
            staus: error.statusCode,
            message: error.message,
        });
    } else {
        res.status(500).json({
            staus: error.statusCode,
            message: error.message,
        });
    }
}


export default (error, req, res, next) => {
    error.status = error.status || "error";
    error.statusCode = error.statusCode || 500;

    if (NODE_ENV === "development") {
        DevError(error, res);
    } else if (NODE_ENV === "production") {
        ProdError(error, res);
    } else {
        return null;
    }
}
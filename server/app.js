import Express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import GlobalErrorHandler from './middleware/error.middleware.js';
import ApiError from './utils/ApiError.js';
import router from './routes/index.js';

const app = Express();

app.use(cors({
    origin: '*',
    credentials: true,
}));
app.use(cookieParser());
app.use(Express.json());
app.use(Express.urlencoded({ extended: true }));
app.use("/api/v1", router);
app.all("*", (req, _, next) => {
    const error = new ApiError(404, `Can't find url ${req.originalUrl}`);
    next(error);
});
app.use(GlobalErrorHandler);

export { app };
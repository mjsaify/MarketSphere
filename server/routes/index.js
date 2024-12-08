import { Router } from "express";
import AdminRouter from './admin.routes.js';
import UserRouter from '../routes/user.routes.js';
import OrderRouter from './order.routes.js';
import { ForgotPasswordRequest, GetProductReviews, ResetPassword, UserLogin, UserSignup } from "../controllers/user.controller.js";
import { auth, authorization } from "../middleware/auth.js";
import { GetAllProducts, GetProductDetails } from "../controllers/product.controller.js";

const router = Router();

// PROTECTED ROUTES
router.use('/admin', auth, authorization("admin"), AdminRouter);
router.use('/user', auth, UserRouter);
router.use('/order', auth, OrderRouter);

// NON-PROTECTED ROUTES
router.post('/auth/signup', UserSignup);
router.post('/auth/login', UserLogin);
router.post('/auth/forgot-password', ForgotPasswordRequest); // sends email
router.put('/auth/forgot-password', ResetPassword);

router.get("/products", GetAllProducts);
router.get("/products/:id", GetProductDetails);
router.get("/product/reviews", GetProductReviews);

export default router;
import { Router } from "express";
import ProductRouter from './product.routes.js';
import UserRouter from '../routes/user.routes.js';
import { UserLogin, UserSignup } from "../controllers/user.controller.js";
import { auth, authorization } from "../middleware/auth.js";
import { GetAllProducts, GetProductDetails } from "../controllers/product.controller.js";

const router = Router();

// PROTECTED
router.use('/products', auth, authorization("admin"), ProductRouter);
router.use('/user', auth, UserRouter);

// NON-PROTECTED ROUTES
router.post('/auth/signup', UserSignup);
router.post('/auth/login', UserLogin);

router.get("/products", GetAllProducts);
router.get("/products/:id", GetProductDetails);

export default router;
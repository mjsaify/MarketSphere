import { Router } from "express";
import ProductRouter from './product.routes.js';

const router = Router();

router.use('/products', ProductRouter);

export default router;
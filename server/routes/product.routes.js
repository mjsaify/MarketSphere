import { Router } from "express";
import { CreateProduct, GetAllProducts } from "../controllers/product.controller.js";

const router = Router();

router.route("/")
    .get(GetAllProducts)
    .post(CreateProduct);

export default router;
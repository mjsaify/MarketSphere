import { Router } from "express";
import { CreateProduct, DeleteProduct, GetAllProducts, GetProductDetails, UpdateProductDetails } from "../controllers/product.controller.js";

const router = Router();

router.route("/")
    .get(GetAllProducts)
    .post(CreateProduct);

router.route("/:id")
    .get(GetProductDetails)
    .put(UpdateProductDetails)
    .delete(DeleteProduct);

export default router;
import { Router } from "express";
import { CreateProduct, DeleteProduct, GetAllProducts, UpdateProductDetails } from "../controllers/product.controller.js";

const router = Router();

router.get("/all_products", GetAllProducts);
router.route("/create-product")
    .post(CreateProduct);

router.route("/:id")
    .put(UpdateProductDetails)
    .delete(DeleteProduct);

export default router;
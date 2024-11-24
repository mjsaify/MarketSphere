import { Router } from "express";
import { CreateProduct, DeleteProduct, UpdateProductDetails } from "../controllers/product.controller.js";

const router = Router();

router.route("/")
    .post(CreateProduct);

router.route("/:id")
    .put(UpdateProductDetails)
    .delete(DeleteProduct);

export default router;
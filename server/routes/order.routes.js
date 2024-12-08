import { Router } from "express";
import { CreateNewOrder } from "../controllers/order.controller.js";

const router = Router();

router.route("/new-order")
    .post(CreateNewOrder);

export default router;
import { Router } from "express";
import { CreateNewOrder, GetOrderDetails, GetPlacedOrders } from "../controllers/order.controller.js";

const router = Router();

router.route("/new-order")
    .post(CreateNewOrder);

router.get("/", GetPlacedOrders);
router.get("/:id", GetOrderDetails);

export default router;
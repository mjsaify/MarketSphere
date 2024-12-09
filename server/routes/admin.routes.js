import { Router } from "express"
import ProductRouter from './product.routes.js';
import { DeleteUser, GetAllOrders, GetAllUsers, GetUserDetails, UpdateOrderStatus, UpdateUserRole } from "../controllers/admin.controller.js";

const router = Router();

router.route("/users")
    .get(GetAllUsers);

router.route("/users/:id")
    .get(GetUserDetails)
    .put(UpdateUserRole)
    .delete(DeleteUser);

router.get("/orders/all_orders", GetAllOrders);
router.put("/orders/:id", UpdateOrderStatus);

router.use("/products", ProductRouter);

export default router;
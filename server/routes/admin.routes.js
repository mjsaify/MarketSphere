import { Router } from "express"
import ProductRouter from './product.routes.js';
import { DeleteUser, GetAllUsers, GetUserDetails, UpdateUserRole } from "../controllers/admin.controller.js";

const router = Router();

router.route("/users")
    .get(GetAllUsers)

router.route("/users/:id")
    .get(GetUserDetails)
    .put(UpdateUserRole)
    .delete(DeleteUser);

router.use("/products", ProductRouter);

export default router;
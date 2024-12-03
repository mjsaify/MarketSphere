import { Router } from "express";
import { GetUserDetails, LogoutUser, UpdateUserPassword, UpdateUserProfile, AddProductReview } from "../controllers/user.controller.js";

const router = Router();

// profile
router.get("/profile", GetUserDetails);
router.put("/profile/update-password", UpdateUserPassword);
router.put("/profile/update", UpdateUserProfile);
router.post("/logout", LogoutUser);

// product
router.route("/products/:id/add_review")
    .post(AddProductReview)


export default router;
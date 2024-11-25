import { Router } from "express";
import { GetUserDetails, LogoutUser, UpdateUserPassword, UpdateUserProfile } from "../controllers/user.controller.js";

const router = Router();

router.get("/profile", GetUserDetails);
router.put("/profile/update-password", UpdateUserPassword);
router.put("/profile/update", UpdateUserProfile);

router.post("/logout", LogoutUser);

export default router;
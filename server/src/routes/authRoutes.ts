import express from "express";
import {
  login,
  logout,
  refreshToken,
  register,
} from "../controllers/authController";
import { validate } from "../middleware/validate";
import { verifyToken } from "../middleware/auth";

const router = express.Router();

router.post("/login", login);
router.post("/register", register);
router.post("/refresh-token", refreshToken);

router.post("/logout", verifyToken, logout);

export default router;

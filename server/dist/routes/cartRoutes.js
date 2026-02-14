import express from "express";
import { addToCart, findCart, updateCart } from "../controllers/cartController";
import { verifyToken } from "../middleware/auth";
const router = express.Router();
router.get("/", verifyToken, findCart);
router.post("/", verifyToken, addToCart);
router.put("/", verifyToken, updateCart);
export default router;

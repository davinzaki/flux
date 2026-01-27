import express from "express";
import { addToCart, findCart, updateCart, removeCartItem } from "../controllers/cartController";
import { verifyToken } from "../middleware/auth";
const router = express.Router();

router.get("/", verifyToken, findCart);
router.post("/", verifyToken, addToCart);
router.put("/", verifyToken, updateCart);
router.delete("/:productId", verifyToken, removeCartItem);

export default router;


import express from "express";
import { addToCart, findCart } from "../controllers/cartController";
import { verifyToken } from "../middleware/auth";
const router = express.Router();

router.get("/", verifyToken, findCart);
router.post("/", verifyToken, addToCart);

export default router;

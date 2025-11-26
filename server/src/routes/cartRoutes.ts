import express from "express";
import { addToCart, findCart } from "../controllers/cartController";
const router = express.Router();

router.get("/", findCart);
router.post("/", addToCart);

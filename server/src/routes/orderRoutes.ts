import express from "express";
import { checkout } from "../controllers/orderController";
import { verifyToken } from "../middleware/auth";
const router = express.Router();

router.post("/", verifyToken, checkout);

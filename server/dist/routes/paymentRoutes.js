import express from "express";
import { xenditWebhook } from "../controllers/paymentController";
const router = express.Router();
router.post("/webhook", xenditWebhook);
export default router;

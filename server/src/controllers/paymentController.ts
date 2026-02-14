import { Request, Response } from "express";
import Order from "../models/Order";
import { Xendit } from "xendit-node";

const xenditClient = new Xendit({
  secretKey: process.env.XENDIT_SECRET_KEY || "",
});

export const xenditWebhook = async (req: Request, res: Response) => {
  try {
    const callbackToken = req.headers["x-callback-token"];
    const xenditCallbackToken = process.env.XENDIT_WEBHOOK_TOKEN;

    if (callbackToken !== xenditCallbackToken) {
      res.status(403).json({ message: "Invalid callback token" });
      return;
    }

    console.log("Webhook Received:", JSON.stringify(req.body, null, 2));
    console.log("Headers:", JSON.stringify(req.headers, null, 2));

    const { external_id, status } = req.body;

    // external_id is the orderId
    if (status === "PAID") {
      console.log(`Searching for order with ID: ${external_id}`);
      const order = await Order.findById(external_id);
      
      if (order) {
        order.status = "paid";
        await order.save();
        console.log(`Order ${external_id} marked as PAID`);
      } else {
        console.log(`Order ${external_id} NOT FOUND`);
      }
    } else if (status === "EXPIRED") {
      const order = await Order.findById(external_id);
      if (order) {
        order.status = "cancelled";
        await order.save();
        console.log(`Order ${external_id} marked as CANCELLED`);
      } else {
        console.log(`Order ${external_id} NOT FOUND`);
      }
    }

    res.status(200).json({ message: "Webhook received" });
  } catch (err: any) {
    console.error("Webhook Error:", err.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

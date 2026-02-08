import Order from "../models/Order";
import { Xendit } from "xendit-node";
const xenditClient = new Xendit({
    secretKey: process.env.XENDIT_SECRET_KEY || "",
});
export const xenditWebhook = async (req, res) => {
    try {
        const callbackToken = req.headers["x-callback-token"];
        const xenditCallbackToken = process.env.XENDIT_WEBHOOK_TOKEN;
        if (callbackToken !== xenditCallbackToken) {
            res.status(403).json({ message: "Invalid callback token" });
            return;
        }
        const { external_id, status } = req.body;
        if (status === "PAID") {
            const order = await Order.findById(external_id);
            if (order) {
                order.status = "paid";
                await order.save();
                console.log(`Order ${external_id} marked as PAID`);
            }
        }
        else if (status === "EXPIRED") {
            const order = await Order.findById(external_id);
            if (order) {
                order.status = "cancelled";
                await order.save();
                console.log(`Order ${external_id} marked as CANCELLED`);
            }
        }
        res.status(200).json({ message: "Webhook received" });
    }
    catch (err) {
        console.error("Webhook Error:", err.message);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

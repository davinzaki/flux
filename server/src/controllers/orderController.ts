import { Request, Response } from "express";
import { checkout as checkoutService } from "../services/orderService";

export const checkout = async (req: Request, res: Response) => {
  try {
    const userId = req.user?.id;

    if (!userId) {
      res.status(400).json({ message: "User ID is required" });
      return;
    }

    const order = await checkoutService(userId);

    res.status(201).json({
      success: true,
      message: "Checkout successful",
      data: order,
    });
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
};

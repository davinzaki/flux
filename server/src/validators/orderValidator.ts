import z from "zod";
import { cartItemSchema } from "./cartValidator";

export const orderItemSchema = z.object({
  productId: z.string().min(1, "Product is required"),
  qty: z.number().min(1, "Min 1 qty"),
  priceAt: z.number(),
});

export type CreateOrderItemDto = z.infer<typeof orderItemSchema>;

export const createOrderSchema = z.object({
  userId: z.string().min(1, "User is required"),
  items: z.array(cartItemSchema),
  total: z.number(),
  status: z.string(),
  paymentMethod: z.string(),
});

export type CreateOrderDto = z.infer<typeof createOrderSchema>;

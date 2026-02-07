import z from "zod";

export const cartItemSchema = z.object({
  productId: z.string().min(1, "Product is required"),
  qty: z.number().min(0, "Min 0 qty"),
});

export type CreateCartItemDto = z.infer<typeof cartItemSchema>;

export const createCartSchema = z.object({
  userId: z.string().min(1, "User is required"),
  items: z.array(cartItemSchema),
});

export type CreateCartDto = z.infer<typeof createCartSchema>;

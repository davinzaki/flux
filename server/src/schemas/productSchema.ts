import { z } from "zod";

export const productSchema = z.object({
  name: z.string().min(1, "Name is required"),
  description: z.string().optional(),
  price: z.coerce.number(),
  stock: z.coerce.number(),
  images: z.array(z.string()).optional(),
});

export type IProduct = z.infer<typeof productSchema>;

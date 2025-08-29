import { z } from "zod";

export const createProductSchema = z.object({
  name: z.string().min(3, "Name is too short"),
  description: z.string().optional(),
  price: z.number().nonnegative(),
  stock: z.number().int().nonnegative(),
  category: z.string().min(1, "Category is required"),
});

export type CreateProductDto = z.infer<typeof createProductSchema>;

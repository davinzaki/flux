import { z } from "zod";

export const createProductSchema = z.object({
  name: z.string().min(3, "Name is too short"),
  description: z.string().optional(),
  price: z.number().nonnegative(),
  stock: z.number().int().nonnegative(),
  categoryId: z.string().min(1, "Category is required"),
});

export type CreateProductDto = z.infer<typeof createProductSchema>;

export const updateProductSchema = z.object({
  name: z.string().min(3, "Name is too short"),
  description: z.string().optional(),
  price: z.number().nonnegative(),
  stock: z.number().int().nonnegative(),
  categoryId: z.string().min(1, "Category is required"),
  imagesToDelete: z.array(z.string()).optional(),
});

export type UpdateProductDto = z.infer<typeof updateProductSchema>;

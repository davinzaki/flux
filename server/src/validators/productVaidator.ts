import { z } from "zod";

export const createProductSchema = z.object({
  name: z.string().min(3, "Name is too short"),
  description: z.string().optional(),
  price: z.coerce.number().nonnegative(),
  stock: z.coerce.number().int().nonnegative(),
  categoryId: z.string().min(1, "Category is required"),
});

export type CreateProductDto = z.infer<typeof createProductSchema>;

export const updateProductSchema = z.object({
  name: z.string().min(3, "Name is too short"),
  description: z.string().optional(),
  price: z.coerce.number().nonnegative(),
  stock: z.coerce.number().int().nonnegative(),
  categoryId: z.string().min(1, "Category is required"),
  images: z.array(z.string()).optional(),
  imagesToDelete: z.array(z.string()).optional(),
});

export type UpdateProductDto = z.infer<typeof updateProductSchema>;

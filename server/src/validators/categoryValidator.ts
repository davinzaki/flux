import z from "zod";

export const createCategorySchema = z.object({
  name: z.string().min(3, "Name is too short"),
});

export type createCategoryDto = z.infer<typeof createCategorySchema>;

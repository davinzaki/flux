import z from "zod";
export declare const createCategorySchema: z.ZodObject<{
    name: z.ZodString;
}, z.core.$strip>;
export type CreateCategoryDto = z.infer<typeof createCategorySchema>;

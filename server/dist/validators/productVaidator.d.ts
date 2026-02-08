import { z } from "zod";
export declare const createProductSchema: z.ZodObject<{
    name: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
    price: z.ZodCoercedNumber<unknown>;
    stock: z.ZodCoercedNumber<unknown>;
    categoryId: z.ZodString;
}, z.core.$strip>;
export type CreateProductDto = z.infer<typeof createProductSchema>;
export declare const updateProductSchema: z.ZodObject<{
    name: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
    price: z.ZodCoercedNumber<unknown>;
    stock: z.ZodCoercedNumber<unknown>;
    categoryId: z.ZodString;
    images: z.ZodOptional<z.ZodArray<z.ZodString>>;
    imagesToDelete: z.ZodOptional<z.ZodPipe<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>, z.ZodTransform<string[], string | string[]>>>;
}, z.core.$strip>;
export type UpdateProductDto = z.infer<typeof updateProductSchema>;

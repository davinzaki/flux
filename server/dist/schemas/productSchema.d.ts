import { z } from "zod";
export declare const productSchema: z.ZodObject<{
    name: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
    price: z.ZodCoercedNumber<unknown>;
    stock: z.ZodCoercedNumber<unknown>;
    images: z.ZodOptional<z.ZodArray<z.ZodString>>;
}, z.core.$strip>;
export type Product = z.infer<typeof productSchema>;

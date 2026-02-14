import z from "zod";
export declare const cartItemSchema: z.ZodObject<{
    productId: z.ZodString;
    qty: z.ZodNumber;
}, z.core.$strip>;
export type CreateCartItemDto = z.infer<typeof cartItemSchema>;
export declare const createCartSchema: z.ZodObject<{
    userId: z.ZodString;
    items: z.ZodArray<z.ZodObject<{
        productId: z.ZodString;
        qty: z.ZodNumber;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type CreateCartDto = z.infer<typeof createCartSchema>;

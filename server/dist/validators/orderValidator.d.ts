import z from "zod";
export declare const orderItemSchema: z.ZodObject<{
    productId: z.ZodString;
    qty: z.ZodNumber;
    priceAt: z.ZodNumber;
}, z.core.$strip>;
export type CreateOrderItemDto = z.infer<typeof orderItemSchema>;
export declare const createOrderSchema: z.ZodObject<{
    userId: z.ZodString;
    items: z.ZodArray<z.ZodObject<{
        productId: z.ZodString;
        qty: z.ZodNumber;
    }, z.core.$strip>>;
    total: z.ZodNumber;
    status: z.ZodString;
    paymentMethod: z.ZodString;
}, z.core.$strip>;
export type CreateOrderDto = z.infer<typeof createOrderSchema>;

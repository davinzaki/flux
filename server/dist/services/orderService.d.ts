export declare const checkout: (userId: string) => Promise<{
    order: import("mongoose").Document<unknown, {}, {
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        userId: import("mongoose").Types.ObjectId;
        items: import("mongoose").Types.DocumentArray<{
            productId: import("mongoose").Types.ObjectId;
            qty: number;
            priceAt?: number | null;
        }, import("mongoose").Types.Subdocument<import("bson").ObjectId, any, {
            productId: import("mongoose").Types.ObjectId;
            qty: number;
            priceAt?: number | null;
        }> & {
            productId: import("mongoose").Types.ObjectId;
            qty: number;
            priceAt?: number | null;
        }>;
        status: "pending" | "paid" | "processing" | "shipped" | "cancelled";
        total?: number | null;
        paymentMethod?: string | null;
        externalId?: string | null;
    }, {}, {
        timestamps: true;
    }> & {
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        userId: import("mongoose").Types.ObjectId;
        items: import("mongoose").Types.DocumentArray<{
            productId: import("mongoose").Types.ObjectId;
            qty: number;
            priceAt?: number | null;
        }, import("mongoose").Types.Subdocument<import("bson").ObjectId, any, {
            productId: import("mongoose").Types.ObjectId;
            qty: number;
            priceAt?: number | null;
        }> & {
            productId: import("mongoose").Types.ObjectId;
            qty: number;
            priceAt?: number | null;
        }>;
        status: "pending" | "paid" | "processing" | "shipped" | "cancelled";
        total?: number | null;
        paymentMethod?: string | null;
        externalId?: string | null;
    } & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    };
    paymentUrl: string;
}>;

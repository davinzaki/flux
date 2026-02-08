import { CreateCartItemDto } from "../validators/cartValidator";
export declare const findCartService: (userId: string) => Promise<import("mongoose").Document<unknown, {}, {
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
    updatedAt?: NativeDate | null;
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
    updatedAt?: NativeDate | null;
} & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
export declare const addToCartService: (body: CreateCartItemDto, userId: string) => Promise<import("mongoose").Document<unknown, {}, {
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
    updatedAt?: NativeDate | null;
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
    updatedAt?: NativeDate | null;
} & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
export declare const updateCartItemService: (body: CreateCartItemDto, userId: string) => Promise<import("mongoose").Document<unknown, {}, {
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
    updatedAt?: NativeDate | null;
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
    updatedAt?: NativeDate | null;
} & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;

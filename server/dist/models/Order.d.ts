import mongoose from "mongoose";
declare const Order: mongoose.Model<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    userId: mongoose.Types.ObjectId;
    items: mongoose.Types.DocumentArray<{
        productId: mongoose.Types.ObjectId;
        qty: number;
        priceAt?: number | null;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
        productId: mongoose.Types.ObjectId;
        qty: number;
        priceAt?: number | null;
    }> & {
        productId: mongoose.Types.ObjectId;
        qty: number;
        priceAt?: number | null;
    }>;
    status: "pending" | "paid" | "processing" | "shipped" | "cancelled";
    total?: number | null;
    paymentMethod?: string | null;
    externalId?: string | null;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    userId: mongoose.Types.ObjectId;
    items: mongoose.Types.DocumentArray<{
        productId: mongoose.Types.ObjectId;
        qty: number;
        priceAt?: number | null;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
        productId: mongoose.Types.ObjectId;
        qty: number;
        priceAt?: number | null;
    }> & {
        productId: mongoose.Types.ObjectId;
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
    userId: mongoose.Types.ObjectId;
    items: mongoose.Types.DocumentArray<{
        productId: mongoose.Types.ObjectId;
        qty: number;
        priceAt?: number | null;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
        productId: mongoose.Types.ObjectId;
        qty: number;
        priceAt?: number | null;
    }> & {
        productId: mongoose.Types.ObjectId;
        qty: number;
        priceAt?: number | null;
    }>;
    status: "pending" | "paid" | "processing" | "shipped" | "cancelled";
    total?: number | null;
    paymentMethod?: string | null;
    externalId?: string | null;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    userId: mongoose.Types.ObjectId;
    items: mongoose.Types.DocumentArray<{
        productId: mongoose.Types.ObjectId;
        qty: number;
        priceAt?: number | null;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
        productId: mongoose.Types.ObjectId;
        qty: number;
        priceAt?: number | null;
    }> & {
        productId: mongoose.Types.ObjectId;
        qty: number;
        priceAt?: number | null;
    }>;
    status: "pending" | "paid" | "processing" | "shipped" | "cancelled";
    total?: number | null;
    paymentMethod?: string | null;
    externalId?: string | null;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    userId: mongoose.Types.ObjectId;
    items: mongoose.Types.DocumentArray<{
        productId: mongoose.Types.ObjectId;
        qty: number;
        priceAt?: number | null;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
        productId: mongoose.Types.ObjectId;
        qty: number;
        priceAt?: number | null;
    }> & {
        productId: mongoose.Types.ObjectId;
        qty: number;
        priceAt?: number | null;
    }>;
    status: "pending" | "paid" | "processing" | "shipped" | "cancelled";
    total?: number | null;
    paymentMethod?: string | null;
    externalId?: string | null;
}>, {}, mongoose.ResolveSchemaOptions<{
    timestamps: true;
}>> & mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    userId: mongoose.Types.ObjectId;
    items: mongoose.Types.DocumentArray<{
        productId: mongoose.Types.ObjectId;
        qty: number;
        priceAt?: number | null;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
        productId: mongoose.Types.ObjectId;
        qty: number;
        priceAt?: number | null;
    }> & {
        productId: mongoose.Types.ObjectId;
        qty: number;
        priceAt?: number | null;
    }>;
    status: "pending" | "paid" | "processing" | "shipped" | "cancelled";
    total?: number | null;
    paymentMethod?: string | null;
    externalId?: string | null;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>>;
export default Order;

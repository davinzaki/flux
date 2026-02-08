import mongoose from "mongoose";
declare const Cart: mongoose.Model<{
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
    updatedAt?: NativeDate | null;
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
    updatedAt?: NativeDate | null;
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
    updatedAt?: NativeDate | null;
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
    updatedAt?: NativeDate | null;
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
    updatedAt?: NativeDate | null;
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
    updatedAt?: NativeDate | null;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>>;
export default Cart;

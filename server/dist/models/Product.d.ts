import mongoose from "mongoose";
declare const Product: mongoose.Model<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    name: string;
    slug: string;
    isActive: boolean;
    description: string;
    price: number;
    stock: number;
    categoryId: mongoose.Types.ObjectId;
    images: string[];
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    name: string;
    slug: string;
    isActive: boolean;
    description: string;
    price: number;
    stock: number;
    categoryId: mongoose.Types.ObjectId;
    images: string[];
}, {}, {
    timestamps: true;
    versionKey: false;
}> & {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    name: string;
    slug: string;
    isActive: boolean;
    description: string;
    price: number;
    stock: number;
    categoryId: mongoose.Types.ObjectId;
    images: string[];
} & {
    _id: mongoose.Types.ObjectId;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
    versionKey: false;
}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    name: string;
    slug: string;
    isActive: boolean;
    description: string;
    price: number;
    stock: number;
    categoryId: mongoose.Types.ObjectId;
    images: string[];
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    name: string;
    slug: string;
    isActive: boolean;
    description: string;
    price: number;
    stock: number;
    categoryId: mongoose.Types.ObjectId;
    images: string[];
}>, {}, mongoose.ResolveSchemaOptions<{
    timestamps: true;
    versionKey: false;
}>> & mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    name: string;
    slug: string;
    isActive: boolean;
    description: string;
    price: number;
    stock: number;
    categoryId: mongoose.Types.ObjectId;
    images: string[];
}> & {
    _id: mongoose.Types.ObjectId;
}>>;
export default Product;

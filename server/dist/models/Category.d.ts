import mongoose from "mongoose";
declare const Category: mongoose.Model<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    name: string;
    slug: string;
    isActive: boolean;
    parentId?: mongoose.Types.ObjectId | null;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    name: string;
    slug: string;
    isActive: boolean;
    parentId?: mongoose.Types.ObjectId | null;
}, {}, {
    timestamps: true;
    toJSON: {
        versionKey: false;
    };
}> & {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    name: string;
    slug: string;
    isActive: boolean;
    parentId?: mongoose.Types.ObjectId | null;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
    toJSON: {
        versionKey: false;
    };
}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    name: string;
    slug: string;
    isActive: boolean;
    parentId?: mongoose.Types.ObjectId | null;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    name: string;
    slug: string;
    isActive: boolean;
    parentId?: mongoose.Types.ObjectId | null;
}>, {}, mongoose.ResolveSchemaOptions<{
    timestamps: true;
    toJSON: {
        versionKey: false;
    };
}>> & mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    name: string;
    slug: string;
    isActive: boolean;
    parentId?: mongoose.Types.ObjectId | null;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>>;
export default Category;

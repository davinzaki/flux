import { CreateProductDto, UpdateProductDto } from "../validators/productVaidator";
import { Request } from "express";
export declare const createProductService: (body: CreateProductDto, files: Express.Multer.File[]) => Promise<import("mongoose").Document<unknown, {}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    name: string;
    slug: string;
    isActive: boolean;
    description: string;
    price: number;
    stock: number;
    categoryId: import("mongoose").Types.ObjectId;
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
    categoryId: import("mongoose").Types.ObjectId;
    images: string[];
} & {
    _id: import("mongoose").Types.ObjectId;
}>;
export declare const updateProductService: (body: UpdateProductDto, files: Express.Multer.File[], id: string) => Promise<(import("mongoose").Document<unknown, {}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    name: string;
    slug: string;
    isActive: boolean;
    description: string;
    price: number;
    stock: number;
    categoryId: import("mongoose").Types.ObjectId;
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
    categoryId: import("mongoose").Types.ObjectId;
    images: string[];
} & {
    _id: import("mongoose").Types.ObjectId;
}) | null>;
export declare const deleteProductService: (id: string) => Promise<(import("mongoose").Document<unknown, {}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    name: string;
    slug: string;
    isActive: boolean;
    description: string;
    price: number;
    stock: number;
    categoryId: import("mongoose").Types.ObjectId;
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
    categoryId: import("mongoose").Types.ObjectId;
    images: string[];
} & {
    _id: import("mongoose").Types.ObjectId;
}) | null>;
export declare const findProductsService: (req: Request) => Promise<{
    data: (import("mongoose").FlattenMaps<{
        createdAt: NativeDate;
        updatedAt: NativeDate;
        name: string;
        slug: string;
        isActive: boolean;
        description: string;
        price: number;
        stock: number;
        categoryId: import("mongoose").Types.ObjectId;
        images: string[];
    }> & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    })[];
    pagination: {
        limit: number;
        currentPage: number;
        totalPages: number;
        totalRecords: number;
    };
}>;
export declare const findProductByIdService: (id: string) => Promise<import("mongoose").FlattenMaps<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
    name: string;
    slug: string;
    isActive: boolean;
    description: string;
    price: number;
    stock: number;
    categoryId: import("mongoose").Types.ObjectId;
    images: string[];
}> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
export declare const findProductBySlugService: (slug: string) => Promise<import("mongoose").FlattenMaps<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
    name: string;
    slug: string;
    isActive: boolean;
    description: string;
    price: number;
    stock: number;
    categoryId: import("mongoose").Types.ObjectId;
    images: string[];
}> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;

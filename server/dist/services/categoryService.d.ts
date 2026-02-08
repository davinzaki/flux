import { CreateCategoryDto } from "../validators/categoryValidator";
export declare const createCategoryService: (body: CreateCategoryDto) => Promise<import("mongoose").Document<unknown, {}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    name: string;
    slug: string;
    isActive: boolean;
    parentId?: import("mongoose").Types.ObjectId | null;
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
    parentId?: import("mongoose").Types.ObjectId | null;
} & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
export declare const findCategoriesService: () => Promise<(import("mongoose").Document<unknown, {}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    name: string;
    slug: string;
    isActive: boolean;
    parentId?: import("mongoose").Types.ObjectId | null;
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
    parentId?: import("mongoose").Types.ObjectId | null;
} & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
})[]>;
export declare const findCategoryByIdService: (id: string) => Promise<(import("mongoose").Document<unknown, {}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    name: string;
    slug: string;
    isActive: boolean;
    parentId?: import("mongoose").Types.ObjectId | null;
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
    parentId?: import("mongoose").Types.ObjectId | null;
} & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}) | null>;
export declare const findCategoryBySlugService: (slug: string) => Promise<(import("mongoose").Document<unknown, {}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    name: string;
    slug: string;
    isActive: boolean;
    parentId?: import("mongoose").Types.ObjectId | null;
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
    parentId?: import("mongoose").Types.ObjectId | null;
} & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}) | null>;
export declare const updateCategoryService: (body: CreateCategoryDto, id: string) => Promise<(import("mongoose").Document<unknown, {}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    name: string;
    slug: string;
    isActive: boolean;
    parentId?: import("mongoose").Types.ObjectId | null;
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
    parentId?: import("mongoose").Types.ObjectId | null;
} & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}) | null>;

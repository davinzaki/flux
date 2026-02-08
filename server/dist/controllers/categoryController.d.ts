import { Request, Response } from "express";
import { CreateCategoryDto } from "../validators/categoryValidator";
export declare const findCategories: (req: Request, res: Response) => Promise<void>;
export declare const createCategory: (req: Request, res: Response) => Promise<void>;
export declare const findCategoryById: (req: Request, res: Response) => Promise<void>;
export declare const findCategoryBySlug: (req: Request, res: Response) => Promise<void>;
export declare const updateCategory: (req: Request<{
    id: string;
}, {}, CreateCategoryDto>, res: Response) => Promise<void>;
export declare const deleteCategory: (req: Request, res: Response) => Promise<void>;

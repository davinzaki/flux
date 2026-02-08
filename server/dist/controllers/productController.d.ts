import { Request, Response } from "express";
export declare const createProduct: (req: Request, res: Response) => Promise<void>;
export declare const updateProduct: (req: Request, res: Response) => Promise<void>;
export declare const deleteProduct: (req: Request, res: Response) => Promise<void>;
export declare const findProducts: (req: Request, res: Response) => Promise<void>;
export declare const findProductById: (req: Request, res: Response) => Promise<void>;
export declare const findProductBySlug: (req: Request, res: Response) => Promise<void>;

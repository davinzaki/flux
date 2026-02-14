import { Request, Response, NextFunction } from "express";
import multer from "multer";
export declare const upload: multer.Multer;
export declare const validateImageMagicNumber: (req: Request, res: Response, next: NextFunction) => Promise<void>;

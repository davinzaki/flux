import { Request, Response, NextFunction } from "express";
import { ZodError, ZodType } from "zod";

export const validate =
  <T extends ZodType>(schema: T) =>
  (req: Request, res: Response, next: NextFunction) => {
    try {
      req.body = schema.parse(req.body);
      next();
    } catch (err) {
      if (err instanceof ZodError) {
        err.issues.forEach((issue) => {
          res.status(400).json({ field: issue.path, message: issue.message });
        });
      }
    }
  };

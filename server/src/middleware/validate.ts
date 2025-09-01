import { Request, Response, NextFunction } from "express";
import { ZodError, ZodType } from "zod";

export const validate =
  <T extends ZodType>(schema: T) =>
  (req: Request, res: Response, next: NextFunction): void => {
    try {
      req.body = schema.parse(req.body);
      next();
    } catch (err) {
      if (err instanceof ZodError) {
        const errors = err.issues.map((issue) => ({
          field: issue.path.join("."),
          message: issue.message,
        }));
        res.status(400).json({ errors });
        return;
      }
      next(err);
    }
  };

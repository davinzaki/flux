import { ZodError } from "zod";
export const validate = (schema) => (req, res, next) => {
    try {
        req.body = schema.parse(req.body);
        next();
    }
    catch (err) {
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

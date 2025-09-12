import { Request, Response, NextFunction } from "express";
import { fileTypeFromBuffer } from "file-type";
import multer from "multer";

// Multer setup
const storage = multer.memoryStorage();
export const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB
});

const allowedMimeTypes = ["image/jpeg", "image/png", "image/webp"];

// Middleware: validate uploaded images
export const validateImageMagicNumber = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const files = req.files as Express.Multer.File[];

    for (const file of files) {
      const type = await fileTypeFromBuffer(file.buffer);

      if (!type || !allowedMimeTypes.includes(type.mime)) {
        res.status(400).json({
          error: `Invalid file type: ${file.originalname}. Detected as ${
            type?.mime || "unknown"
          }`,
        });
        return;
      }
    }

    next();
  } catch (err) {
    next(err);
  }
};

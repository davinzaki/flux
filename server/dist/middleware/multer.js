import { fileTypeFromBuffer } from "file-type";
import multer from "multer";
const storage = multer.memoryStorage();
export const upload = multer({
    storage,
    limits: { fileSize: 5 * 1024 * 1024 },
});
const allowedMimeTypes = ["image/jpeg", "image/png", "image/webp"];
export const validateImageMagicNumber = async (req, res, next) => {
    try {
        const files = req.files;
        for (const file of files) {
            const type = await fileTypeFromBuffer(file.buffer);
            if (!type || !allowedMimeTypes.includes(type.mime)) {
                res.status(400).json({
                    error: `Invalid file type: ${file.originalname}. Detected as ${type?.mime || "unknown"}`,
                });
                return;
            }
        }
        next();
    }
    catch (err) {
        next(err);
    }
};

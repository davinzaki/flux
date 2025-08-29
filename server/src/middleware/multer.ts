import multer from "multer";
import path from "path";
import { cwd } from "process";

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, path.join(cwd(), "uploads"));
//   },
//   filename: (req, file, cb) => {
//     const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
//     cb(null, uniqueSuffix + path.extname(file.originalname));
//   },
// });

// export const upload = multer({ storage });

const storage = multer.memoryStorage();

export const upload = multer({ storage });

import express from "express";
import {
  createProduct,
  findProductById,
  findProductBySlug,
  findProducts,
  updateProduct,
} from "../controllers/productController";
import { validate } from "../middleware/validate";
import { productSchema } from "../schemas/productSchema";
import { upload } from "../middleware/multer";

const router = express.Router();

router.get("/", findProducts);
// router.get("/:id", findProductById);
router.get("/:slug", findProductBySlug);
router.post("/", upload.array("images", 5), createProduct);
router.put("/", upload.array("images", 5), updateProduct);

export default router;

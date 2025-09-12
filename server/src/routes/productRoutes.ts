import express from "express";
import {
  createProduct,
  deleteProduct,
  findProductById,
  findProductBySlug,
  findProducts,
  updateProduct,
} from "../controllers/productController";
import { validate } from "../middleware/validate";
import { productSchema } from "../schemas/productSchema";
import { upload, validateImageMagicNumber } from "../middleware/multer";
import {
  createProductSchema,
  updateProductSchema,
} from "../validators/productVaidator";
import { verifyToken } from "../middleware/auth";

const router = express.Router();

router.get("/", findProducts);
// router.get("/:id", findProductById);
router.get("/:slug", findProductBySlug);
router.post(
  "/",
  upload.array("images", 5),
  validateImageMagicNumber,
  validate(createProductSchema),
  createProduct
);
router.put(
  "/:id",
  upload.array("images", 5),
  validateImageMagicNumber,
  validate(updateProductSchema),
  updateProduct
);
router.delete("/:id", deleteProduct);

export default router;

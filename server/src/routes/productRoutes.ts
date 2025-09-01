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
import { createProductSchema } from "../validators/productVaidator";

const router = express.Router();

router.get("/", findProducts);
// router.get("/:id", findProductById);
router.get("/:slug", findProductBySlug);
router.post(
  "/",
  upload.array("images", 5),
  validate(createProductSchema),
  createProduct
);
router.put("/", upload.array("images", 5), updateProduct);

export default router;

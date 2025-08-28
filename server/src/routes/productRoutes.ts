import express from "express";
import {
  createProduct,
  findProductById,
  findProductBySlug,
  findProducts,
} from "../controllers/productController";
import { upload } from "../middleware/multer";
import { validate } from "../middleware/validate";
import { productSchema } from "../schemas/productSchema";

const router = express.Router();

// router.get("/", async (req, res) => {
//   if (req.query.id) return findProductById(req, res);
//   if (req.query.slug) return findProductBySlug(req, res);
// });

router.get("/", findProducts);
// router.get("/:id", findProductById);
router.get("/:slug", findProductBySlug);
router.post("/", upload.array("images", 5), createProduct);

export default router;

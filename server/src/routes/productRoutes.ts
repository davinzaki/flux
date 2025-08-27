import express from "express";
import {
  createProduct,
  findProductById,
  findProductBySlug,
  findProducts,
} from "../controllers/productController";

const router = express.Router();

// router.get("/", async (req, res) => {
//   if (req.query.id) return findProductById(req, res);
//   if (req.query.slug) return findProductBySlug(req, res);
// });

router.get("/", findProducts);
// router.get("/:id", findProductById);
router.get("/:slug", findProductBySlug);
router.post("/", createProduct);

export default router;

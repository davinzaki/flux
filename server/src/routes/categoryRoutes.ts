import express from "express";
import {
  createCategory,
  deleteCategory,
  findCategories,
  findCategoryById,
  findCategoryBySlug,
  updateCategory,
} from "../controllers/categoryController";

const router = express.Router();

router.get("/", findCategories);
router.post("/", createCategory);
router.get("/:slug", findCategoryBySlug);
router.get("/:slug/:id", findCategoryById);
router.put("/:slug/:id", updateCategory);
router.delete("/:slug/:id", deleteCategory);

export default router;

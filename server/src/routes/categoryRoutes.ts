import express from "express";
import {
  createCategory,
  deleteCategory,
  findCategories,
  findCategoryById,
  findCategoryBySlug,
  updateCategory,
} from "../controllers/categoryController";
import { validate } from "../middleware/validate";
import { createCategorySchema } from "../validators/categoryValidator";

const router = express.Router();

router.get("/", findCategories);
router.post("/", validate(createCategorySchema), createCategory);
router.get("/:slug", findCategoryBySlug);
// router.get("/:slug/:id", findCategoryById);
router.put("/:id", validate(createCategorySchema), updateCategory);
router.delete("/:id", deleteCategory);

export default router;

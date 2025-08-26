import express from "express";
import {
  createCategory,
  deleteCategory,
  getCategories,
  getCategory,
} from "../controllers/categoryController";

const router = express.Router();

router.get("/", getCategories);
router.post("/", createCategory);
router.get("/:slug/:id", getCategory);
router.delete("/:slug/:id", deleteCategory);

export default router;

import express from "express";
import {
  createCategory,
  getCategories,
  getCategory,
} from "../controllers/categoryController";

const router = express.Router();

router.get("/", getCategories);
router.post("/", createCategory);
router.get("/:slug/:id", getCategory);

export default router;

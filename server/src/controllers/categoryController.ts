import { Request, Response } from "express";
import Category from "../models/Category";
import { default as generateSlug } from "slug";
import {
  createCategoryService,
  findCategoriesService,
  findCategoryByIdService,
  findCategoryBySlugService,
  updateCategoryService,
} from "../services/categoryService";

export const findCategories = async (req: Request, res: Response) => {
  try {
    const categories = await findCategoriesService();
    res.status(200).send({
      success: true,
      message: "Successfully Get All Categories",
      data: categories,
    });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

export const createCategory = async (req: Request, res: Response) => {
  try {
    const category = await createCategoryService(req.body);
    res.status(201).send({
      success: true,
      message: "Category Created Successfully",
      data: category,
    });
  } catch (error) {
    res.status(400).json({ message: (error as Error).message });
  }
};

export const findCategoryById = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;

    if (!id) {
      res.status(400).json({ message: "Category ID is required" });
      return;
    }

    const category = await findCategoryByIdService(id);
    res.status(200).send({
      success: true,
      message: "Successfully Get Category By Id",
      data: category,
    });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

export const findCategoryBySlug = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { slug } = req.params;

    if (!slug) {
      res.status(400).json({ message: "Category slug is required" });
      return;
    }

    const product = await findCategoryBySlugService(slug);
    res.status(200).send({
      success: true,
      message: "Successfully Get Category By Id",
      data: product,
    });
  } catch {
    res.status(500).json({ message: "Internal server error" });
  }
};

export const updateCategory = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;
    if (!id) {
      res.status(400).json({ message: "Category ID is required" });
      return;
    }
    const { name } = req.body;
    const category = await updateCategoryService(name, id);
    res.status(200).send({
      success: true,
      message: "Successfully Update Category",
      data: category,
    });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

export const deleteCategory = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const category = await Category.findByIdAndDelete(id);
    res.status(200).send({
      success: true,
      message: "Successfully Delete Category",
      data: category,
    });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

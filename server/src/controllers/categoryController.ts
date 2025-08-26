import { Request, Response } from "express";
import Category from "../models/Category";

export const getCategories = async (req: Request, res: Response) => {
  try {
    const categories = await Category.find();
    res.json(categories);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

export const createCategory = async (req: Request, res: Response) => {
  try {
    const category = new Category({ ...req.body });
    await category.save();
    res.status(201).json(category);
  } catch (error) {
    res.status(400).json({ message: (error as Error).message });
  }
};

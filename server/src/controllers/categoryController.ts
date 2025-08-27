import { Request, Response } from "express";
import Category from "../models/Category";
import { default as generateSlug } from "slug";

export const findCategories = async (req: Request, res: Response) => {
  try {
    const categories = await Category.find({});
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
    const { name } = req.body;
    const slug = generateSlug(name);
    const category = new Category({ slug, ...req.body });
    console.log("category", category);
    await category.save();
    res.status(201).send({
      success: true,
      message: "Category Created Successfully",
      data: category,
    });
  } catch (error) {
    res.status(400).json({ message: (error as Error).message });
  }
};

export const findCategoryById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const category = await Category.findById(id);
    res.status(200).send({
      success: true,
      message: "Successfully Get Category By Id",
      data: category,
    });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

export const findCategoryBySlug = async (req: Request, res: Response) => {
  try {
    const { slug } = req.params;
    const category = await Category.findOne({ slug });
    res.status(200).send({
      success: true,
      message: "Successfully Get Category By Slug",
      data: category,
    });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

export const updateCategory = async (req: Request, res: Response) => {
  try {
    console.log(req.body);
    console.log("req.params", req.params);
    const { name } = req.body;
    const { id } = req.params;
    const slug = generateSlug(name);
    const category = await Category.findByIdAndUpdate({ id }, { name, slug });
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

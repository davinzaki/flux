import Category from "../models/Category";
import { createCategoryService, findCategoriesService, findCategoryByIdService, findCategoryBySlugService, updateCategoryService, } from "../services/categoryService";
export const findCategories = async (req, res) => {
    try {
        const categories = await findCategoriesService();
        res.status(200).send({
            success: true,
            message: "Successfully Get All Categories",
            data: categories,
        });
    }
    catch (err) {
        res.status(400).json({ message: err.message });
    }
};
export const createCategory = async (req, res) => {
    try {
        const category = await createCategoryService(req.body);
        res.status(201).send({
            success: true,
            message: "Category Created Successfully",
            data: category,
        });
    }
    catch (err) {
        res.status(400).json({ message: err.message });
    }
};
export const findCategoryById = async (req, res) => {
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
    }
    catch (err) {
        res.status(400).json({ message: err.message });
    }
};
export const findCategoryBySlug = async (req, res) => {
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
    }
    catch (err) {
        res.status(400).json({ message: err.message });
    }
};
export const updateCategory = async (req, res) => {
    try {
        const { id } = req.params;
        const categoryExists = await Category.findById(id);
        if (!id) {
            res.status(400).json({ message: "Category ID is required" });
            return;
        }
        if (!categoryExists) {
            res.status(404).json({ message: "Category not found" });
            return;
        }
        const category = await updateCategoryService(req.body, id);
        res.status(200).json({
            success: true,
            message: "Successfully Update Category",
            data: category,
        });
    }
    catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
};
export const deleteCategory = async (req, res) => {
    try {
        const { id } = req.params;
        const category = await Category.findByIdAndDelete(id);
        res.status(200).send({
            success: true,
            message: "Successfully Delete Category",
            data: category,
        });
    }
    catch (err) {
        res.status(400).json({ message: err.message });
    }
};

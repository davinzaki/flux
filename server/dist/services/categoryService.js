import Category from "../models/Category";
import { default as generateSlug } from "slug";
export const createCategoryService = async (body) => {
    const { name } = body;
    const slug = generateSlug(name);
    const category = new Category({ slug, ...body });
    await category.save();
    return category;
};
export const findCategoriesService = async () => {
    return await Category.find();
};
export const findCategoryByIdService = async (id) => {
    return await Category.findById(id);
};
export const findCategoryBySlugService = async (slug) => {
    return await Category.findOne({ slug });
};
export const updateCategoryService = async (body, id) => {
    const { name } = body;
    const slug = generateSlug(name);
    const category = await Category.findByIdAndUpdate(id, { slug, name }, { new: true });
    return category;
};

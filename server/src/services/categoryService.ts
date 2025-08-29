import Category from "../models/Category";
import { default as generateSlug } from "slug";
import { createCategoryDto } from "../validators/categoryValidator";

export const createCategoryService = async (body: createCategoryDto) => {
  const { name } = body;
  const slug = generateSlug(name);

  const category = new Category({ slug, ...body });

  await category.save();
  return category;
};

export const findCategoriesService = async () => {
  return await Category.find();
};
export const findCategoryByIdService = async (id: string) => {
  return await Category.findById(id);
};
export const findCategoryBySlugService = async (slug: string) => {
  return await Category.findOne({ slug });
};

export const updateCategoryService = async (
  body: createCategoryDto,
  id: string
) => {
  const { name } = body;
  const slug = generateSlug(name);
  const category = await Category.findByIdAndUpdate({ id }, { slug, name });

  return category;
};

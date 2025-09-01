import Category from "../models/Category";
import { default as generateSlug } from "slug";
import { CreateCategoryDto } from "../validators/categoryValidator";

export const createCategoryService = async (body: CreateCategoryDto) => {
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
  body: CreateCategoryDto,
  id: string
) => {
  const { name } = body;
  const slug = generateSlug(name);
  const category = await Category.findByIdAndUpdate(
    id,
    { slug, name },
    { new: true }
  );

  return category;
};

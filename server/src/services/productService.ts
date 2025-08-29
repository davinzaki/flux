import Product from "../models/Product";
import { default as generateSlug } from "slug";
import { uploadFileToS3 } from "../utils/s3";
import { CreateProductDto } from "../validators/productVaidator";

export const createProductService = async (
  body: CreateProductDto,
  files: Express.Multer.File[]
) => {
  const imageUrls = await Promise.all(
    files.map((file) => uploadFileToS3(file, "products"))
  );

  const slug = generateSlug(body.name);

  const product = new Product({
    slug,
    images: imageUrls,
    ...body,
  });

  await product.save();
  return product;
};

export const findProductsService = async () => {
  return await Product.find()
    .populate("category", "name slug")
    .lean({ virtuals: true });
};

export const findProductByIdService = async (id: string) => {
  return await Product.findById(id)
    .populate("category", "name slug")
    .lean({ virtuals: true });
};

export const findProductBySlugService = async (slug: string) => {
  return await Product.findOne({ slug })
    .populate("category", "name slug")
    .lean({ virtuals: true });
};

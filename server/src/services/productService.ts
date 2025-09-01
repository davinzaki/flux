import Product from "../models/Product";
import { default as generateSlug } from "slug";
import {
  deleteFileFromS3,
  deleteFilesFromS3,
  uploadFileToS3,
} from "../utils/s3";
import {
  CreateProductDto,
  UpdateProductDto,
} from "../validators/productVaidator";

export const createProductService = async (
  body: CreateProductDto,
  files: Express.Multer.File[]
) => {
  console.log("files", files);

  const slug = generateSlug(body.name);

  const productExists = await Product.findOne({ slug });

  console.log("productExists", productExists);

  if (productExists) {
    throw new Error("Product already exists");
  }

  const imageUrls = await Promise.all(
    files.map((file) => uploadFileToS3(file, "products"))
  );

  const product = new Product({
    slug,
    files: imageUrls,
    ...body,
  });

  await product.save();
  return product;
};

export const updateProductService = async (
  body: UpdateProductDto,
  files: Express.Multer.File[],
  id: string
) => {
  const { name, imagesToDelete } = body;

  const slug = generateSlug(body.name);

  if (imagesToDelete) {
    deleteFilesFromS3(imagesToDelete);
  }

  let product;
  if (files.length > 0) {
    const newImageUrls = await Promise.all(
      files.map((file) => uploadFileToS3(file, "products"))
    );

    product = { slug, images: newImageUrls, ...body };
    console.log("payload product", product);

    // product = await Product.findByIdAndUpdate(
    //   { id },
    //   { images: newImageUrls, ...body }
    // );
  }
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

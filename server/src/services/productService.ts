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
    images: imageUrls,
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

  const product = await Product.findById(id);
  if (!product) {
    throw new Error("Product not found");
  }

  let slug: string | undefined;
  if (name && name !== product.name) {
    slug = generateSlug(name);
  }

  if (imagesToDelete?.length) {
    await deleteFilesFromS3(imagesToDelete);
  }

  let newImageUrls: string[] = [];
  if (files?.length) {
    newImageUrls = await Promise.all(
      files.map((file) => uploadFileToS3(file, "products"))
    );
  }
  const updatedPayload = {
    ...body,
    ...(slug && { slug }),
    ...(newImageUrls.length > 0 && { images: newImageUrls }),
  };

  console.log("payload product", updatedPayload);
  const updatedProduct = await Product.findByIdAndUpdate(id, updatedPayload, {
    new: true,
  });

  return updatedProduct;
};

export const deleteProductService = async (id: string) => {
  const product = await Product.findById(id);

  if (!product) {
    throw new Error("Product not found");
  }

  const { images } = product;

  console.log("images", images);

  if (images?.length) {
    await deleteFilesFromS3(images);
  }

  const deletedProduct = await Product.findByIdAndDelete(id);

  return deletedProduct;
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

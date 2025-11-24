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
import { Request } from "express";

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

  const slug = name && name !== product.name ? generateSlug(name) : undefined;

  let existingImages = product.images;
  if (imagesToDelete?.length) {
    await deleteFilesFromS3(imagesToDelete);
    existingImages = product.images.filter(
      (image) => !imagesToDelete.includes(image)
    );
  }

  const newImageUrls = files?.length
    ? await Promise.all(files.map((file) => uploadFileToS3(file, "products")))
    : [];

  const updatePayload = {
    ...body,
    ...(slug && { slug }),
    images: [...newImageUrls, ...existingImages],
  };

  const updatedProduct = await Product.findByIdAndUpdate(id, updatePayload, {
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

  if (images?.length) {
    await deleteFilesFromS3(images);
  }

  const deletedProduct = await Product.findByIdAndDelete(id);

  return deletedProduct;
};

export const findProductsService = async (req: Request) => {
  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 10;

  const products = await Product.find()
    .limit(limit)
    .skip((page - 1) * limit)
    .populate("category", "name slug")
    .lean({ virtuals: true })
    .sort({ createdAt: -1 });

  const totalDocuments = await Product.countDocuments();

  const result = {
    data: products,
    pagination: {
      limit,
      currentPage: page,
      totalPages: Math.ceil(totalDocuments / limit),
      totalRecords: totalDocuments,
    },
  };

  return result;
};

// limit(), number as param, limit number of data we send or we can get in one request
// skip(<offset>), offset (the number of documents to skip from query result) as parameter,
// skip() is method to skip a n number of data or not return that n data

export const findProductByIdService = async (id: string) => {
  const product = await Product.findById(id)
    .populate("category", "name slug")
    .lean({ virtuals: true });

  console.log("product", product);
  if (!product) {
    throw new Error("Product not found");
  }
  return product;
};

export const findProductBySlugService = async (slug: string) => {
  const product = await Product.findOne({ slug })
    .populate("category", "name slug")
    .lean({ virtuals: true });

  if (!product) {
    throw new Error("Product not found");
  }
  return product;
};

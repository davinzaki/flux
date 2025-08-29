import { Request, Response } from "express";
import Product from "../models/Product";
import { default as generateSlug } from "slug";
import { z } from "zod";
import { uploadFileToS3 } from "../utils/s3";

const productSchema = z.object({
  name: z.string(),
  description: z.string(),
  price: z.number().min(0),
  stock: z.number().min(0),
  categoryId: z.string(),
});

export const findProducts = async (req: Request, res: Response) => {
  try {
    const products = await Product.find()
      .populate("category", "name slug")
      .lean({ virtuals: true });
    // .lean() is basically "read-only mode" for much better performance

    res.status(200).send({
      success: true,
      message: "Successfully Get All Products",
      data: products,
    });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

export const findProductById = async (req: Request, res: Response) => {
  try {
    console.log("id param:", req.params.id);
    const { id } = req.params;
    const products = await Product.findById(id)
      .populate("category", "name slug")
      .lean({ virtuals: true });

    res.status(200).send({
      success: true,
      message: "Successfully Get Product By Id",
      data: products,
    });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

export const findProductBySlug = async (req: Request, res: Response) => {
  try {
    console.log("Slug param:", req.params.slug);
    // console.log(req.params);
    // const { slug } = req.params;
    const products = await Product.findOne({ slug: req.params.slug })
      .populate("category", "name slug")
      .lean({ virtuals: true });

    // if (!products) {
    //   return res.status(404).json({ message: "Category not found" });
    // }

    res.status(200).send({
      success: true,
      message: "Successfully Get Product By Slug",
      data: products,
    });
  } catch (error) {
    console.error("findProductBySlug error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const createProduct = async (req: Request, res: Response) => {
  try {
    const images = req.files as Express.Multer.File[];

    const imageUrls = await Promise.all(
      images.map((image) => uploadFileToS3(image, "products"))
    );
    console.log("imageUrls", imageUrls);
    // const parsed = productSchema.parse(req.body);
    const slug = generateSlug(req.body.name);
    const product = new Product({ slug, images: imageUrls, ...req.body });
    await product.save();
    res.status(201).send({
      success: true,
      message: "Product Created Successfully",
      data: product,
    });
  } catch (err: any) {
    if (err.code === 11000) {
      res
        .status(400)
        .json({ message: "Slug already exists, please use another" });
    } else {
      res.status(400).json({ message: (err as Error).message });
    }
  }
};

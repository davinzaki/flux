import { Request, Response } from "express";
import Product from "../models/Product";
import { default as generateSlug } from "slug";

export const findProducts = async (req: Request, res: Response) => {
  try {
    const products = await Product.find()
      .populate("category", "name slug")
      .lean({ virtuals: true });
    // .lean() is basically "read-only mode" for much better performance!

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
    console.log(req.body);
    const { name } = req.body;
    const slug = generateSlug(name);
    const product = new Product({ slug, ...req.body });
    await product.save();
    res.status(201).send({
      success: true,
      message: "Category Created Successfully",
      data: product,
    });
  } catch (error) {
    res.status(400).json({ message: (error as Error).message });
  }
};

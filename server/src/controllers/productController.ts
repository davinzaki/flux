import { Request, Response } from "express";
import Product from "../models/Product";
import { default as generateSlug } from "slug";

export const getProducts = async (req: Request, res: Response) => {
  try {
    // const products = await Product.aggregate([
    //   {
    //     $lookup: {
    //       from: "categories",
    //       localField: "categoryId",
    //       foreignField: "_id",
    //       as: "category",
    //     },
    //   },
    //   { $unwind: "$category" },
    // ]);

    // const products = await Product.find().populate("slug name");

    const products = await Product.find()
      .populate("categoryId", "name slug")
      .lean({ virtuals: true });

    res.status(200).send({
      success: true,
      message: "Successfully Get All Products",
      data: products,
    });
  } catch (error) {
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

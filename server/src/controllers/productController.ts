import { Request, Response } from "express";
import {
  createProductService,
  findProductsService,
  findProductByIdService,
  findProductBySlugService,
} from "../services/productService";

export const createProduct = async (req: Request, res: Response) => {
  try {
    const product = await createProductService(
      req.body,
      req.files as Express.Multer.File[]
    );
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
      res.status(400).json({ message: err.message });
    }
  }
};

export const findProducts = async (req: Request, res: Response) => {
  try {
    const products = await findProductsService();
    res.status(200).send({
      success: true,
      message: "Successfully Get All Products",
      data: products,
    });
  } catch {
    res.status(500).json({ message: "Internal server error" });
  }
};

export const findProductById = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;

    if (!id) {
      res.status(400).json({ message: "Product ID is required" });
      return;
    }

    const product = await findProductByIdService(id);
    res.status(200).send({
      success: true,
      message: "Successfully Get Product By Id",
      data: product,
    });
  } catch {
    res.status(500).json({ message: "Internal server error" });
  }
};

export const findProductBySlug = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { slug } = req.params;

    if (!slug) {
      res.status(400).json({ message: "Product slug is required" });
      return;
    }

    const product = await findProductByIdService(slug);
    res.status(200).send({
      success: true,
      message: "Successfully Get Product By Id",
      data: product,
    });
  } catch {
    res.status(500).json({ message: "Internal server error" });
  }
};

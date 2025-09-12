import { Request, Response } from "express";
import {
  createProductService,
  findProductsService,
  findProductByIdService,
  findProductBySlugService,
  updateProductService,
  deleteProductService,
} from "../services/productService";
import Product from "../models/Product";

export const createProduct = async (req: Request, res: Response) => {
  try {
    console.log(req.body);
    const product = await createProductService(
      req.body,
      req.files as Express.Multer.File[]
    );
    res.status(201).send({
      success: true,
      message: "Product Created Successfully",
    });
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
};

export const updateProduct = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const images = req.files as Express.Multer.File[];

    if (!id) {
      res.status(400).json({ message: "Product ID is required" });
      return;
    }

    const product = await updateProductService(req.body, images, id);

    res.status(201).send({
      success: true,
      message: "Product Updated Successfully",
      data: product,
    });
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
};

export const deleteProduct = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    if (!id) {
      res.status(400).json({ message: "Product ID is required" });
      return;
    }

    const product = await deleteProductService(id);

    res.status(200).send({
      success: true,
      message: "Successfully Delete Category",
      data: product,
    });
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
};

export const findProducts = async (req: Request, res: Response) => {
  try {
    const result = await findProductsService(req);

    res.status(200).send({
      success: true,
      message: "Successfully Get All Products",
      result,
    });
  } catch (err: any) {
    res.status(400).json({ message: err.message });
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
  } catch (err: any) {
    res.status(400).json({ message: err.message });
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

    const product = await findProductBySlugService(slug);
    res.status(200).send({
      success: true,
      message: "Successfully Get Product By Slug",
      data: product,
    });
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
};

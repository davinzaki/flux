import { Request, Response } from "express";
import {
  addToCartService,
  findCartService,
  updateCartItemService,
} from "../services/cartService";
import { CreateCartDto, CreateCartItemDto } from "../validators/cartValidator";

export const findCart = async (req: Request, res: Response) => {
  try {
    const userId = req.user?.id;

    if (!userId) {
      res.status(400).json({ message: "User ID is required" });
      return;
    }

    const cart = await findCartService(userId);

    res.status(200).send({
      success: true,
      message: "Successfully Get Cart",
      data: cart,
    });
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
};

export const addToCart = async (req: Request, res: Response) => {
  try {
    const userId = req.user?.id;

    if (!userId) {
      res.status(400).json({ message: "User ID is required" });
      return;
    }

    console.log("req.body", req.body);

    const cart = await addToCartService(req.body, userId);

    res.status(201).send({
      success: true,
      message: "Successfully Add to Cart",
      data: cart,
    });
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
};

export const updateCart = async (
  req: Request,
  res: Response,
) => {
  try {
    const userId = req.user?.id;

    if (!userId) {
      res.status(400).json({ message: "User ID is required" });
      return;
    }

    const cart = await updateCartItemService(req.body, userId);

    res.status(200).send({
      success: true,
      message: "Successfully Update Cart",
      data: cart,
    });
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
  
};

export const removeCartItem = async (req: Request, res: Response) => {
  try {
    
  } catch (err: any) {
    res.status(400).json({ message: err.message });

  }
}

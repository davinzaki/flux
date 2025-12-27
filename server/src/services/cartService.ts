import Cart from "../models/Cart";
import { CreateCartDto, CreateCartItemDto } from "../validators/cartValidator";
import { findProductByIdService } from "./productService";

export const findCartService = async (userId: string) => {
  let cart = await Cart.findOne({ userId: userId }).populate("items.product");

  if (!cart) {
    cart = await Cart.create({ userId: userId, items: [] });
  }

  return cart;
};

export const addToCartService = async (
  body: CreateCartItemDto,
  userId: string
) => {
  const { productId, qty } = body;

  const product = await findProductByIdService(productId);

  let cart = await Cart.findOne({ userId })

  // new cart
  if(!cart) {
    cart = await Cart.create({ userId: userId, items: [{productId, qty}]})
    return cart 
  }


  

  await cart.save();

  return cart;
};

export const updateCartItemService = async (body: CreateCartDto, userId: string) => {

}

export const removeCartItemService = async () => {};



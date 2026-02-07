import Cart from "../models/Cart";
import { CreateCartDto, CreateCartItemDto } from "../validators/cartValidator";
import { findProductByIdService } from "./productService";

export const findCartService = async (userId: string) => {
  let cart = await Cart.findOne({ userId: userId }).populate("items.productId");

  if (!cart) {
    cart = await Cart.create({ userId: userId, items: [] });
  }

  return cart;
};

export const addToCartService = async (
  body: CreateCartItemDto,
  userId: string,
) => {
  // const { productId, qty } = body;
  const productId = body.productId;
  const qty = Number(body.qty);

  const product = await findProductByIdService(productId);

  if (product.stock === 0) {
    throw new Error("Product out of stock");
  }

  let cart = await Cart.findOne({ userId });

  // new cart
  if (!cart) {
    cart = await Cart.create({ userId: userId, items: [{ productId, qty }] });
    return cart;
  }

  const exist = cart.items.find(
    (item) => item.productId.toString() === productId,
  );

  if (exist) {
    exist.qty += qty;
  } else {
    cart.items.push({ productId, qty });
  }

  await cart.save();

  return cart;
};

export const updateCartItemService = async (
  body: CreateCartItemDto,
  userId: string,
) => {
  const productId = body.productId;
  const qty = Number(body.qty);

  const product = await findProductByIdService(productId);

  if (product.stock === 0) {
    throw new Error("Product out of stock");
  }

  if (qty < 0) {
    throw new Error("Qty can't negative");
  }

  const cart = await Cart.findOne({ userId });

  if (!cart) {
    throw new Error("Cart not found");
  }

  const exist = cart.items.find(
    (item) => item.productId.toString() === productId,
  );

  if (!exist) {
    throw new Error("Item not found in cart");
  }

  if (qty === 0) {
    const idx = cart.items.indexOf(exist);
    if (idx !== -1) {
      cart.items.splice(idx, 1);
    }
  } else {
    exist.qty = qty;
  }

  await cart.save();

  return cart;
};

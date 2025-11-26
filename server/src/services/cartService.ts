import Cart from "../models/Cart";
import { CreateCartItemDto } from "../validators/cartValidator";
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

  let cart = await Cart.findOne({ userId: userId });

  //   create cart if not exsist
  if (!cart) {
    cart = await Cart.create({
      userId: userId,
      items: [{ product: productId, qty }],
    });

    return cart;
  }

  //   find if product already existsd
  const exists = cart.items.find(
    (item) => item.productId.toString() === productId
  );

  if (exists) {
    exists.qty += qty;
  } else {
    cart.items.push({ product: productId, qty });
  }

  await cart.save();

  return cart;
};

export const removeCartItemService = async () => {};

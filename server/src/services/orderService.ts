import Cart from "../models/Cart";
import Product from "../models/Product";
import Order from "../models/Order";

export const checkout = async (userId: string) => {
  const cart = await Cart.findOne({ userId });

  if (!cart || cart.items.length === 0) {
    throw new Error("Cart is empty");
  }

  let total = 0;
  const orderItems: any[] = [];

  for (const item of cart.items) {
    const product = await Product.findById(item.productId);

    if (!product) {
      throw new Error(`Product not found`);
    }

    if (product.stock < item.qty) {
      throw new Error(`Insufficient stock for product ${product.name}`);
    }

    total += product.price * item.qty;

    orderItems.push({
      productId: product._id,
      qty: item.qty,
      priceAt: product.price,
    });

    product.stock -= item.qty;
    await product.save();
  }

  const order = await Order.create({
    userId,
    items: orderItems,
    total,
    status: "pending",
    paymentMethod: "gateway",
  });

  cart.items = [] as any;
  await cart.save();

  return order;
};

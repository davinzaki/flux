import Cart from "../models/Cart";
import Product from "../models/Product";
import Order from "../models/Order";
import User from "../models/User";
import { Xendit } from "xendit-node";
import { CreateInvoiceRequest } from "xendit-node/invoice/models";

const xenditClient = new Xendit({
  secretKey: process.env.XENDIT_SECRET_KEY || "",
});

export const checkout = async (userId: string) => {
  const cart = await Cart.findOne({ userId });
  const user = await User.findById(userId);

  if (!user) {
    throw new Error("User not found");
  }

  if (!cart || cart.items.length === 0) {
    throw new Error("Cart is empty");
  }

  let total = 0;
  const orderItems: any[] = [];
  // const lineItems: any[] = []; // Stripe logic removed

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

    // lineItems.push(...) // Stripe logic removed

    product.stock -= item.qty;
    await product.save();
  }

  const order = await Order.create({
    userId,
    items: orderItems,
    total,
    status: "pending",
    paymentMethod: "gateway",
    // externalId: ... // field to store xendit invoice id?
  });

  cart.items = [] as any;
  await cart.save();

  // Xendit logic
  const invoice: CreateInvoiceRequest = await xenditClient.Invoice.createInvoice({
    data: {
      externalId: order._id.toString(),
      amount: total,
      description: `Invoice for Order #${order._id}`,
      invoiceDuration: 86400, // 24 hours
      currency: "IDR",
      customer: {
        email: user.email,
        // mobileNumber: user.phone, // user model doesn't have phone yet
      },
      successRedirectUrl: `${process.env.CLIENT_URL || "http://localhost:5173"}/payment/success?order_id=${order._id}`,
      failureRedirectUrl: `${process.env.CLIENT_URL || "http://localhost:5173"}/payment/failed`,
    },
  });

  if (invoice.externalId) {
    order.externalId = invoice.externalId;
    await order.save();
  }

  return { order, invoice: invoice };
};

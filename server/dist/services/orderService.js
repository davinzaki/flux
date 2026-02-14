import Cart from "../models/Cart";
import Product from "../models/Product";
import Order from "../models/Order";
import User from "../models/User";
import { Xendit } from "xendit-node";
const xenditClient = new Xendit({
    secretKey: process.env.XENDIT_SECRET_KEY || "",
});
export const checkout = async (userId) => {
    const cart = await Cart.findOne({ userId });
    const user = await User.findById(userId);
    if (!user) {
        throw new Error("User not found");
    }
    if (!cart || cart.items.length === 0) {
        throw new Error("Cart is empty");
    }
    let total = 0;
    const orderItems = [];
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
    cart.items = [];
    await cart.save();
    const invoice = await xenditClient.Invoice.createInvoice({
        data: {
            externalId: order._id.toString(),
            amount: total,
            description: `Invoice for Order #${order._id}`,
            invoiceDuration: 86400,
            currency: "IDR",
            customer: {
                email: user.email,
            },
            failureRedirectUrl: `${process.env.CLIENT_URL}/payment/failed`,
        },
    });
    if (invoice.id) {
        order.externalId = invoice.id;
        await order.save();
    }
    return { order, paymentUrl: invoice.invoiceUrl };
};

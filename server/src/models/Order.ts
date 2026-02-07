import mongoose, { Schema } from "mongoose";

const orderItemSchema = new Schema(
  {
    productId: { type: Schema.Types.ObjectId, ref: "Product", required: true },
    qty: { type: Number, required: true, min: 1 },
    priceAt: Number,
  },
  { _id: false },
);

const orderSchema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    items: [orderItemSchema],
    total: Number,
    status: {
      type: String,
      enum: ["pending", "paid", "processing", "shipped", "cancelled"],
      default: "pending",
    },
    paymentMethod: String,
  },
  { timestamps: true },
);

const Order = mongoose.model("Order", orderSchema);

export default Order;

import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    stock: { type: Number, required: true },
    categoryId: { type: Number, required: true },
    images: [String],
  },
  { timestamps: true }
);

const product = mongoose.model("Produdct", productSchema);

export default product;

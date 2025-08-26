import mongoose, { Schema } from "mongoose";

const productSchema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    slug: { type: String, required: true },
    price: { type: Number, required: true },
    stock: { type: Number, required: true },
    categoryId: { type: Number, required: true },
    images: [String],
  },
  { timestamps: true }
);

const Product = mongoose.model("Produdct", productSchema);

export default Product;

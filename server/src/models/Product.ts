import mongoose, { Schema } from "mongoose";

const productSchema = new Schema(
  {
    name: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    price: { type: Number, required: true, min: 0 },
    stock: { type: Number, required: true, min: 0 },
    isActive: { type: Boolean, default: true },
    categoryId: {
      type: Schema.Types.ObjectId,
      ref: "Category",
      required: true,
      index: true,
    },
    images: [String],
  },
  { timestamps: true, toJSON: { versionKey: false } }
);

productSchema.virtual("category", {
  ref: "Category", // Reference Category model
  localField: "categoryId", // Use product's categoryId field
  foreignField: "_id", // Match with category's _id field
  justOne: true, // Return single object (not array)
});

const Product = mongoose.model("Product", productSchema);

export default Product;

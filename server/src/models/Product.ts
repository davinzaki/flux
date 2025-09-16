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
  { timestamps: true, versionKey: false }
);

//models/Products.ts

productSchema.virtual("category", {
  ref: "Category", // referensi model Category
  localField: "categoryId", // menggunakan field dari modal Product
  foreignField: "_id", // cocokan dengan field _id Category
  justOne: true, // return single object
});

productSchema.set("toJSON", { virtuals: true }); // supaya waktu di-convert ke JSON field virtual ikut tampil
productSchema.set("toObject", { virtuals: true });

const Product = mongoose.model("Product", productSchema);

export default Product;

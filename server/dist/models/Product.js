import mongoose, { Schema } from "mongoose";
const productSchema = new Schema({
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
}, { timestamps: true, versionKey: false });
productSchema.virtual("category", {
    ref: "Category",
    localField: "categoryId",
    foreignField: "_id",
    justOne: true,
});
productSchema.set("toJSON", { virtuals: true });
productSchema.set("toObject", { virtuals: true });
const Product = mongoose.model("Product", productSchema);
export default Product;

import { createProductService, findProductsService, findProductByIdService, findProductBySlugService, updateProductService, deleteProductService, } from "../services/productService";
export const createProduct = async (req, res) => {
    try {
        const product = await createProductService(req.body, req.files);
        res.status(201).send({
            success: true,
            message: "Product Created Successfully",
        });
    }
    catch (err) {
        res.status(400).json({ message: err.message });
    }
};
export const updateProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const images = req.files;
        if (!id) {
            res.status(400).json({ message: "Product ID is required" });
            return;
        }
        const product = await updateProductService(req.body, images, id);
        res.status(201).send({
            success: true,
            message: "Product Updated Successfully",
            data: product,
        });
    }
    catch (err) {
        res.status(400).json({ message: err.message });
    }
};
export const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;
        if (!id) {
            res.status(400).json({ message: "Product ID is required" });
            return;
        }
        const product = await deleteProductService(id);
        res.status(200).send({
            success: true,
            message: "Successfully Delete Category",
            data: product,
        });
    }
    catch (err) {
        res.status(400).json({ message: err.message });
    }
};
export const findProducts = async (req, res) => {
    try {
        const result = await findProductsService(req);
        res.status(200).send({
            success: true,
            message: "Successfully Get All Products",
            result,
        });
    }
    catch (err) {
        res.status(400).json({ message: err.message });
    }
};
export const findProductById = async (req, res) => {
    try {
        const { id } = req.params;
        if (!id) {
            res.status(400).json({ message: "Product ID is required" });
            return;
        }
        const product = await findProductByIdService(id);
        res.status(200).send({
            success: true,
            message: "Successfully Get Product By Id",
            data: product,
        });
    }
    catch (err) {
        res.status(400).json({ message: err.message });
    }
};
export const findProductBySlug = async (req, res) => {
    try {
        const { slug } = req.params;
        if (!slug) {
            res.status(400).json({ message: "Product slug is required" });
            return;
        }
        const product = await findProductBySlugService(slug);
        res.status(200).send({
            success: true,
            message: "Successfully Get Product By Slug",
            data: product,
        });
    }
    catch (err) {
        res.status(400).json({ message: err.message });
    }
};

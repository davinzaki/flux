import "dotenv/config";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import categoryRoutes from "./routes/categoryRoutes";
import productRoutes from "./routes/productRoutes";
import authRoutes from "./routes/authRoutes";
import cartRoutes from "./routes/cartRoutes";
import orderRoutes from "./routes/orderRoutes";
import paymentRoutes from "./routes/paymentRoutes";
import path from "path";
import { cwd } from "process";
import connectDB from "./config/db";
const app = express();
const PORT = process.env.PORT || 5000;
app.use(helmet());
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
}));
app.use(morgan("combined"));
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true }));
app.use("/uploads", express.static(path.join(cwd(), "uploads")));
app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "Flux API is running!",
    });
});
app.get("/api/test", (req, res) => {
    res.json({
        success: true,
        message: "API endpoint is working!",
    });
});
app.use("/api/auth", authRoutes);
app.use("/api/categories", categoryRoutes);
app.use("/api/products", productRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/payment", paymentRoutes);
app.use((err, req, res, next) => {
    res.status(500).json({
        message: "Something went wrong!",
        ...(process.env.NODE_ENV === "development" && { error: err.message }),
    });
});
app.use("*", (req, res) => {
    res.status(404).json({ message: "Route not found" });
});
const startServer = async () => {
    await connectDB();
    app.listen(PORT, () => {
        console.log(`🚀 Server running on http://localhost:${PORT}`);
    });
};
startServer().catch(console.error);

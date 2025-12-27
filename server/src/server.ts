import "dotenv/config";
import express, { Request, Response, NextFunction } from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import { ApiResponse } from "./types";

import categoryRoutes from "./routes/categoryRoutes";
import productRoutes from "./routes/productRoutes";
import authRoutes from "./routes/authRoutes";
import cartRoutes from "./routes/cartRoutes";

import path from "path";
import { cwd } from "process";
import connectDB from "./config/db";

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(helmet());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(morgan("combined"));
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true }));

// serve files from uploads
app.use("/uploads", express.static(path.join(cwd(), "uploads")));

// Routes
app.get("/", (req: Request, res: Response<ApiResponse>) => {
  res.json({
    success: true,
    message: "Flux API is running!",
  });
});

app.get("/api/test", (req: Request, res: Response<ApiResponse>) => {
  res.json({
    success: true,
    message: "API endpoint is working!",
  });
});

app.use("/api/auth", authRoutes);
app.use("/api/categories", categoryRoutes);
app.use("/api/products", productRoutes);
app.use("/api/cart", cartRoutes);

// Error handling middleware
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({
    message: "Something went wrong!",
    ...(process.env.NODE_ENV === "development" && { error: err.message }),
  });
});

// 404 handler
app.use("*", (req: Request, res: Response) => {
  res.status(404).json({ message: "Route not found" });
});

// Start server
const startServer = async (): Promise<void> => {
  await connectDB();

  app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
  });
};

startServer().catch(console.error);

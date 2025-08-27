import express, { Request, Response, NextFunction } from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { ApiResponse } from "./types";

import categoryRouter from "./routes/categoryRoutes";
import productRouter from "./routes/productRoutes";

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(helmet());
app.use(cors());
app.use(morgan("combined"));
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true }));

// MongoDB Connection
const connectDB = async (): Promise<void> => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ MongoDB Connected");
  } catch (error) {
    console.error("❌ MongoDB connection error:", error);
    process.exit(1);
  }
};

// Routes
app.get("/", (req: Request, res: Response<ApiResponse>) => {
  res.json({
    success: true,
    message: "Flux API is running!",
    data: { timestamp: new Date().toISOString() },
  });
});

app.get("/api/test", (req: Request, res: Response<ApiResponse>) => {
  res.json({
    success: true,
    message: "API endpoint is working! sfgsf",
    data: { timestamp: new Date().toISOString() },
  });
});

app.use("/api/categories", categoryRouter);
app.use("/api/products", productRouter);

// Error handling middleware
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
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

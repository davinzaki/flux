import express from "express";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";
import connectDB from "./config/db.js";

dotenv.config();
connectDB();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(helmet());
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

// Basic route
app.get("/", (req, res) => {
  res.json({ message: "Flux API is running!" });
});

app.get("/api/test", (req, res) => {
  res.json({ message: "API endpoint working! tgefsnfsn" });
});

app.listen(PORT, (error) => {
  if (!error) {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
  } else {
    console.log("Error occurred, server can't start", error);
  }
});

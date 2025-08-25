const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const helmet = require("helmet");
const morgan = require("morgan");
const cors = require("cors");
dotenv.config();

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
  res.json({ message: "API endpoint working!" });
});

app.listen(PORT, (error) => {
  if (!error) {
    console.log(`🚀 Server running on port http://localhost:${PORT}`);
  } else {
    console.log("Error occurred, server can't start", error);
  }
});

import express from "express";
import mongoose from "mongoose";
import { config } from "./config";
import routes from "./routes";

const app = express();

// Connect MongoDB
mongoose.connect(config.mongoUri)
  .then(() => console.log(`✅ Connected to MongoDB at ${config.mongoUri}`))
  .catch(err => console.error("❌ MongoDB connection error:", err));

// Routes
app.use("/", routes);

app.listen(config.port, () => {
  console.log(`🚀 [${config.env}] Server running at http://localhost:${config.port}`);
});

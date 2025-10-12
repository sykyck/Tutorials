import express, { Request, Response } from "express";
import mongoose from "mongoose";
import cors from "cors";
import { config } from "./config";
import routes from "./routes";

const app = express();

// Connect MongoDB
mongoose.connect(config.mongoUri)
  .then(() => console.log(`✅ Connected to MongoDB at ${config.mongoUri}`))
  .catch(err => console.error("❌ MongoDB connection error:", err));

app.use(cors());
app.use(express.json());

// Routes
app.use("/api", routes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});

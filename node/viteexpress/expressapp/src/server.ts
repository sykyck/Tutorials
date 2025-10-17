import express from "express";
import mongoose from "mongoose";
import https from "https";
import { config } from "./config";
import routes from "./routes";
import fs from "fs";
import cors from "cors";

const app = express();

// Connect MongoDB
mongoose.connect(config.mongoUri)
  .then(() => console.log(`✅ Connected to MongoDB at ${config.mongoUri}`))
  .catch(err => console.error("❌ MongoDB connection error:", err));

app.use(cors());
app.use(express.json()); // <--- This is crucial req.body will be undefined unless you enable express.json() middleware
// Routes
app.use("/api", routes);

const options = {
  key: fs.readFileSync("../../cert/localhost-key.pem"),
  cert: fs.readFileSync("../../cert/localhost-cert.pem"),
};

https.createServer(options, app).listen(3001, () => {
  console.log(`🚀 HTTPS server running at https://localhost:${config.httpsPort}`);
});

// app.listen(config.port, () => {
//   console.log(`🚀 [${config.env}] Server running at http://localhost:${config.port}`);
// });

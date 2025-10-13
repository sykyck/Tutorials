import dotenv from "dotenv";

const env = process.env.NODE_ENV || "development";
dotenv.config({ path: `.env.${env}` });

export const config = {
  env,
  port: process.env.PORT || 3000,
  httpsPort: process.env.HTTPS_PORT || 3001,
  mongoUri: process.env.MONGO_URI || "mongodb://localhost:27017/angularexpressdevdb",
};

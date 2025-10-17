import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from "fs";
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    https: {
      key: fs.readFileSync("../../cert/localhost-key.pem"),
      cert: fs.readFileSync("../../cert/localhost-cert.pem"),
    },
    port: 5173,
  },
  resolve: {
    alias: {
      "@common": path.resolve(__dirname, "./src/common"),
      "@redux": path.resolve(__dirname, "./src/redux"),
      "@assets": path.resolve(__dirname, "./src/assets"),
      "@api": path.resolve(__dirname, "./src/api"),
    },
  },
})

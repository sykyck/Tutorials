import { Router } from "express";
import fs from "fs";

const router = Router();

router.get("/eventloop", (req, res) => {
  console.log("1️⃣ Start request");

  setTimeout(() => console.log("2️⃣ setTimeout"), 0);

  Promise.resolve().then(() => console.log("3️⃣ Promise.then"));

  setImmediate(() => console.log("4️⃣ setImmediate"));

  fs.readFile(__filename, () => console.log("5️⃣ fs.readFile callback"));

  console.log("6️⃣ End request");

  res.send("🚀 Event loop demo triggered! Check server logs.");
});

export default router;

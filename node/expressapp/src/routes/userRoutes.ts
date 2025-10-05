import { Router } from "express";
import mongoose from "mongoose";

const router = Router();

// Schema + model
const UserSchema = new mongoose.Schema({ name: String, age: Number });
const User = mongoose.model("User", UserSchema);

// Route: add user
router.get("/add-user", async (req, res) => {
  const user = new User({ name: req.body.name, age: req.body.age });
  await user.save();
  res.send("👤 User added to MongoDB!");
});

// Route: get users
router.get("/users", async (req, res) => {
  const users = await User.find();
  res.json(users);
});

export default router;

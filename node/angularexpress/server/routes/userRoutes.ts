import { Router } from "express";
import mongoose from "mongoose";

const router = Router();

// Schema + model
const UserSchema = new mongoose.Schema({ name: String, age: Number });
const User = mongoose.model("User", UserSchema);

// ✅ POST /api/add-user  → Add user
router.post("/add-user", async (req, res) => {
  try {
    const { name, age } = req.body;
    if (!name || !age) {
      return res.status(400).json({ error: "Name and age are required" });
    }

    const user = new User({ name, age });
    await user.save();

    res.status(201).json({ message: "👤 User added to MongoDB!", user });
  } catch (err) {
    console.error("Error adding user:", err);
    res.status(500).json({ error: "Failed to add user" });
  }
});

// ✅ GET /api/users?page=1&limit=10
router.get("/paginatedUsers", async (req, res) => {
  try {
    const page = parseInt(req.query.page as string) || 1;  // default: 1
    const limit = parseInt(req.query.limit as string) || 10; // default: 10
    const skip = (page - 1) * limit;

    // total number of documents
    const totalUsers = await User.countDocuments();

    // actual users for this page
    const users = await User.find()
      .skip(skip)
      .limit(limit)
      .sort({ _id: -1 }); // optional: newest first

    res.json({
      totalUsers,
      totalUserPages: Math.ceil(totalUsers / limit),
      currentPage: page,
      users,
    });
  } catch (err) {
    console.error("Error fetching users:", err);
    res.status(500).json({ error: "Failed to fetch users" });
  }
});

export default router;

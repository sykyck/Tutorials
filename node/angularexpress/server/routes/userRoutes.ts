import { Router } from "express";
import User from '../models/user.model';
import { getPaginatedUsers } from '../controllers/user.controller';

const router = Router();

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
router.get("/paginatedUsers", getPaginatedUsers);

export default router;

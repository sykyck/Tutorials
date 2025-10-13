import { Request, Response } from "express";
import User from "../models/user.model"; // adjust path if needed

// ✅ Controller function for paginated users
export const getPaginatedUsers = async (req: Request, res: Response) => {
  try {
    const page = parseInt(req.query.page as string) || 1;  // default: 1
    const limit = parseInt(req.query.limit as string) || 10; // default: 10
    const skip = (page - 1) * limit;

    const totalUsers = await User.countDocuments();

    const users = await User.find()
      .skip(skip)
      .limit(limit)
      .sort({ _id: -1 }); // newest first

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
};
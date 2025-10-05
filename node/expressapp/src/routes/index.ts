import { Router } from "express";
import userRoutes from "./userRoutes";
import commonRoutes from "./commonRoutes";

const router = Router();

router.use("/users", userRoutes);
router.use("/common", commonRoutes);

export default router;

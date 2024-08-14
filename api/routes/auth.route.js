import express from "express";
import { signOut } from "../controllers/auth.controller.js";
import { signup, signin, google } from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/signin", signin);
router.post("/google", google);
router.get("/signout", signOut);
export default router;

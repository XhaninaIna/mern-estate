import express from "express";
import { test } from "../controllers/user.controller.js";
const router = express.Router();
//get merr nga db
//per te vendosur te dhena perdoret "put"
router.get("/test", test);
export default router;

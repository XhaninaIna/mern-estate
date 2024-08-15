import express from "express";
import {
  createListing,
  deleteListing,
  updateListing,
} from "../controllers/listing.controller.js";
import { verifyToken } from "../utils/verifyUser.js";
const router = express.Router();
router.post("/create", verifyToken, createListing);

//delete lisitng functionality
router.delete("/delete/:id", verifyToken, deleteListing);
//edit user listings
router.post("/update/:id", verifyToken, updateListing);
export default router;

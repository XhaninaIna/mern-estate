import express from "express";
import { test } from "../controllers/user.controller.js";
import { updateUser, getUserListing } from "../controllers/user.controller.js";
import { verifyToken } from "../utils/verifyUser.js";
import { deleteUser } from "../controllers/user.controller.js";

const router = express.Router();
//get merr nga db
//per te vendosur te dhena perdoret "put"
router.get("/test", test);

//create update api route
router.post("/update/:id", verifyToken, updateUser);
//check if the user is auth or not , using token
router.delete("/delete/:id", verifyToken, deleteUser);
//
router.get("/listings/:id", verifyToken, getUserListing);

export default router;

import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user.route.js";
import authRouter from "./routes/auth.route.js";
import cookieParser from "cookie-parser";
import listingRouter from "./routes/listing.route.js";
dotenv.config();

//connected to database test
mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("Connected to MongoDB!");
  })
  .catch((err) => {
    console.log(err);
  });
//server running ne porten 3000
const app = express();
app.use(express.json());
//cookie parser
app.use(cookieParser());
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

//api route
//request for client(browser), response for server
app.use("/api/user", userRouter);
//create auth router
app.use("/api/auth", authRouter);

app.use("/api/listing", listingRouter);
//create middleware
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});

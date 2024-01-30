import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/user.route.js";
import authRoutes from "./routes/auth.route.js";
import authPosts from "./routes/post.route.js";
dotenv.config();
const app = express();
import cookieParser from "cookie-parser";

app.use(express.json());
app.use(cookieParser());

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("CONNECTE HAI TA");
  })
  .catch((error) => {
    console.log("ERROR in connection", error);
  });

app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/post", authPosts);

app.listen(4000, () => {
  console.log("SERVER RUNNING ON 4000!");
});

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message;
  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});

import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/user.route.js";
import authRoutes from "./routes/auth.route.js";
dotenv.config();
const app = express();

app.use(express.json());

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

app.listen(4000, () => {
  console.log("SERVER RUNNING ON 4000!");
});

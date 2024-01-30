import express from "express";
const router = express();
import { verifyToken } from "../utils/verifyUser.js";
import { createPost } from "../controllers/post.controller.js";

router.post("/create-post", verifyToken, createPost);

export default router;

import express from "express";
const router = express();
import { verifyToken } from "../utils/verifyUser.js";
import { createPost, getPosts } from "../controllers/post.controller.js";

router.post("/create-post", verifyToken, createPost);
router.get("/getPosts", getPosts);

export default router;

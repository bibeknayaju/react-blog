import express from "express";

const router = express.Router();
import { createComment } from "../controllers/comment.controller.js";
import { verifyToken } from "../utils/verifyUser.js";

router.post("/create-comment", verifyToken, createComment);

export default router;

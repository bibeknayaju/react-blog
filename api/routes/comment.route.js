import express from "express";

const router = express.Router();
import {
  createComment,
  getPostComments,
} from "../controllers/comment.controller.js";
import { verifyToken } from "../utils/verifyUser.js";

router.post("/create-comment", verifyToken, createComment);
router.get("/get-comments/:postId", getPostComments);

export default router;

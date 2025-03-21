import express from "express";
import { deleteBlog, getAllBlogs, getBlogById, getBlogByUserId, postBlog } from "../controllers/blogController.js";

const router = express.Router();

router.get('/blogs', getAllBlogs);
router.get('/blogs/:id', getBlogById);
router.get('/blogs/user/:userId', getBlogByUserId);
router.post('/blogs', postBlog);
router.delete('/blogs/:id', deleteBlog);

export default router;

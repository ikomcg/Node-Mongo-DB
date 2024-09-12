const express = require("express");
const Blog = require("../models/blog");
const router = express.Router();
const BlogController = require("../controllers/blog");

router.get("/all-blog", BlogController.getAllBlog);

router.post("/add-blog", BlogController.addBlog);

router.put("/:id/update-blog", BlogController.updateBlog);

router.get("/:id/single-blog", BlogController.findBlog);

router.delete("/:id/delete-blog", BlogController.deleteBlog);

module.exports = router;

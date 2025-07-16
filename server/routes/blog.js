const express = require("express");
const router = express.Router();

// Temporarily storing blogs in memory
const blogs = [];

router.post("/", (req, res) => {
  const { title, content } = req.body;
  if (!title || !content) {
    return res.status(400).json({ message: "Title and content are required" });
  }
  blogs.push({ title, content, date: new Date() });
  res.json({ message: "Blog saved successfully!" });
});

router.get("/", (req, res) => {
  res.json(blogs);
});

module.exports = router;

// server/index.js
const express = require("express");
const cors = require("cors");

const app = express();
const blogRoutes = require("./routes/blog");
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend is running");
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

app.use("/api/blogs", blogRoutes);

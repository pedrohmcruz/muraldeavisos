const express = require("express");
const PORT = 3000;
const posts = require("../model/posts");
const path = require("path");
const apiRoute = require("../routes/api")

posts.posts.shift();
const app = express();

app.use("/api", apiRoute)
app.use("/", express.static(path.join(__dirname, "../public")));

app.listen(PORT, () => {
  console.log(`Server running on PORT: ${PORT}`);
})
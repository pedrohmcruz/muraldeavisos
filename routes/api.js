const express = require("express");
const bodyParser = require("body-parser");
const posts = require("../model/posts");
const router = express.Router();

router.get("/all", (req, res) => {
  res.json(JSON.stringify(posts.getAll()));
})

router.post("/new", bodyParser.json(), (req, res) => {
  const {title, description} = req.body;
  posts.newPost(title, description);

  res.send("Post added");
})

module.exports = router;
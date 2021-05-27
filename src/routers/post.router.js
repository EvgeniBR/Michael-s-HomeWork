const express = require("express");
const Post = require("../models/post.model");
const router = new express.Router();


// add post to data base
router.post("/api/posts", async (req, res) => {
  const post = new Post(req.body);
  try {
    await post.save();
    res.status(201).send(post);
  } catch (e) {
    res.status(400).send(e);
  }
});

// get all posts
router.get("/api/posts", async (req, res) => {
    try {
      const posts = await Post.find({}, function (err, res) {
        if (err) {
          console.log("error", res, err);
          process.exit();
        }
      });
      res.status(200).send(posts);
    } catch (e) {
      res.status(400).send(e);
    }
  });

// get posts by email
router.get("/api/posts/email", async (req, res) => {
  const email = req.body.email;
  try {
    const posts = await Post.find({ email: email }, function (err, res) {
      if (err) {
        console.log("error", res, err);
        process.exit();
      }
    });
    res.status(200).send(posts);
  } catch (e) {
    res.status(400).send(e);
  }
});

module.exports = router;

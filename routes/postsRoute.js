const express = require("express");
const router = express.Router();
const imageUpload = require("../middlewares/imageUpload");
const posts_route = require("../controlers/posts");

router
  .route("/post")
  .post(imageUpload.single("image"), posts_route.insert_post);

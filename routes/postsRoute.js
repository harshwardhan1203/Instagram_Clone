const express = require("express");
const router = express.Router();
const imageUpload = require("../middlewares/imageUpload");
const posts_route = require("../controlers/posts");
const auth = require("../middlewares/authentication");

router
  .route("/post")
  .get(auth, posts_route.see_all_mine_post)
  .post(auth, imageUpload.single("image"), posts_route.insert_post)
  .delete(auth, posts_route.delete_post);

router.route("/get_all_posts").get(auth, posts_route.see_all_post);

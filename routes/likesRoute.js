const express = require("express");
const router = express.Router();
const auth = require("../middlewares/authentication");

const likes_route = require("../controlers/likes");

router
  .route("/like")
  .post(auth, likes_route.like_a_post)
  .delete(auth, likes_route.unlike_a_post);

router.route("/total_likes").post(auth, likes_route.total_likes_on_a_post);

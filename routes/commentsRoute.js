const express = require("express");
const router = express.Router();
const auth = require("../middlewares/authentication");

const comments_route = require("../controlers/comments");

router
  .route("/comments")
  .post(auth, comments_route.comment_a_post)
  .delete(auth, comments_route.delete_a_comment_a_post);

router.route("/get_all_comments").get(auth, comments_route.see_all_comments);

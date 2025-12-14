const express = require("express");
const router = express.Router();
const auth = require("../middlewares/authentication");

const follow_route = require("../controlers/followers");

router
  .route("/follow")
  .post(auth, follow_route.follow_someone) // to follow someone
  .delete(auth, follow_route.unfollow_someone); // for unfollow

router.route("/total_followers").get(auth, follow_route.total_followers);
// to see how many followers one have

router.route("/total_following").get(auth, follow_route.total_following);
// to see how many one is following

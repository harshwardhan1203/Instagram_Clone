const followers = require("../models/followersModel");

exports.follow_someone = async (req, res) => {
  let follower_id = req.userData.id;
  let { following_id } = req.body;

  let followed = await followers.insert_follow(follower_id, following_id);
  if (followed.affectedRows) {
    return res.status(200).json({ message: " follow successfull" });
  }
  return res.status(200).json({ message: " follow unsuccessfull" });
};

exports.unfollow_someone = async (req, res) => {
  let follower_id = req.userData.id;
  let { following_id } = req.body;

  let followed = await followers.delete_follow(follower_id, following_id);
  if (followed.affectedRows) {
    return res.status(200).json({ message: " follow successfull" });
  }
  return res.status(200).json({ message: " follow unsuccessfull" });
};

exports.total_followers = async (req, res) => {
  let follower_id = req.userData.id;
  let followed = await followers.total_followers(follower_id);

  if (followed.length) {
    return res.status(200).json({ message: " total followers successfull" });
  }
  return res.status(200).json({ message: " total followers unsuccessfull" });
};

exports.total_following = async (req, res) => {
  let follower_id = req.userData.id;
  let followed = await followers.total_followings(follower_id);

  if (followed.length) {
    return res.status(200).json({ message: " total following successfull" });
  }
  return res.status(200).json({ message: " total following unsuccessfull" });
};

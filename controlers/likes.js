const likes = require("../models/likes.Model");

exports.like_a_post = async (req, res) => {
  let user_id = req.userData.id;
  let { post_id } = req.body;
  let liked = await likes.insert_like(user_id, post_id);
  if (liked.affectedRows) {
    return res.status(200).json({ message: "like inserted " });
  }
  return res.status(200).json({ message: " something went wrong" });
};

exports.unlike_a_post = async (req, res) => {
  let user_id = req.userData.id;
  let { post_id } = req.body;
  let liked = await likes.delete_like(user_id, post_id);
  if (liked.affectedRows) {
    return res.status(200).json({ message: "like inserted " });
  }
  return res.status(200).json({ message: " something went wrong" });
};

exports.total_likes_on_a_post = async (req, res) => {
  let { post_id } = req.body;
  let total_like = await likes.total_like(post_id);
  if (total_like.length) {
    return res.status(200).json({ message: " success" });
  }
  return res.status(200).json({ message: "fail" });
};

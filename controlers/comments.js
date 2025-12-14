const comments = require("../models/commentsModel");

exports.comment_a_post = async (req, res) => {
  let { post_id, comment_text } = req.body;
  let user_id = req.userData.id;
  let commented = await comments.insert_comment(post_id, user_id, comment_text);
  if (commented.affectedRows) {
    return res.status(200).json({ message: "commented" });
  }
  return res.status(200).json({ message: "not commented due to some error" });
};

exports.delete_a_comment_a_post = async (req, res) => {
  let { post_id, comment_text } = req.body;
  let user_id = req.userData.id;
  let commented = await comments.delete_comment(post_id, user_id);
  if (commented.affectedRows) {
    return res.status(200).json({ message: "delete comment done" });
  }
  return res
    .status(200)
    .json({ message: "not delete comment done due to some error" });
};

exports.see_all_comments = async (req, res) => {
  let { post_id } = req.body;
  let allComments = await comments.see_all_comments(post_id);
  if (allComments.length) {
    return res.status(200).json({ message: "all comment send " });
  }
  return res.status(200).json({ message: "some error" });
};

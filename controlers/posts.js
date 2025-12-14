const posts = require("../models/postsModel");

exports.insert_post = async (req, res) => {
  const { caption } = req.body;
  let user_id = req.userData.id;
  let imageUrl = null;

  if (req.file) {
    imageUrl = req.file.path;
  }

  let newPost = await posts.insert_post(user_id, imageUrl, caption);
  if (newPost.length) {
    return res.status(200).json({ message: "post inserted successfully" });
  }
  return res.status(200).json({ message: " error inserting post" });
};

exports.delete_post = async (req, res) => {
  const { post_id } = req.body;
  const user_id = req.userData.id;

  let delete_status = await posts.delete_post(user_id, post_id);
  if (data.affectedRows) {
    return res.status(200).json({ message: "post deleted successfully" });
  }
  return res
    .status(200)
    .json({ message: "post not deleted. Something went wrong" });
};

exports.see_all_post = async (req, res) => {
  let allPosts = await posts.get_all_post;
  if (allPosts.length) {
    return res.status(200).json(allPosts);
  }
  return res.status(200).json({ message: "error loading posts" });
};

exports.see_all_mine_post = async (req, res) => {
  const user_id = req.userData.id;
  let allPosts = await posts.get_all_mine_post(user_id);
  if (allPosts.length) {
    return res.status(200).json(allPosts);
  }
  return res.status(200).json({ message: "error loading posts" });
};

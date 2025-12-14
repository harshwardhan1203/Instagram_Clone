const insertPost = require("../models/postsModel");

exports.insert_post = async (req, res) => {
  const { caption } = req.body;
  let user_id = req.userData.id;
  let imageUrl = null;

  if (req.file) {
    imageUrl = req.file.path;
  }

  let newPost = await insertPost.insert_post(user_id, imageUrl, caption);
  if (newPost.length) {
    return res.status(200).json({ message: "post inserted successfully" });
  }
  return res.status(200).json({ message: " error inserting post" });
};

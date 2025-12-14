const query = require("../connection");

var comments = function (value) {};

comments.insert_comment = async function (post_id, user_id, comment_text) {
  try {
    let sql = `insert into comments (post_id,user_id,comment_text) values (?,?,?);`;
    let data = await query(sql, [post_id, user_id, comment_text]);
    return data;
  } catch (error) {
    console.log(error);
    return 0;
  }
};

comments.delete_comment = async function (post_id, user_id) {
  try {
    let sql = `delete from comments where post_id=? AND user_id=?;`;
    let data = await query(sql, [post_id, user_id]);
    return data;
  } catch (error) {
    console.log(error);
    return 0;
  }
};

comments.see_all_comments = async function (post_id) {
  try {
    let sql = `select post_id,user_id,comment_text,created_at from comments where post_id=?;`;
    let data = await query(sql, [post_id]);
  } catch (error) {
    console.log(error);
    return 0;
  }
};

module.exports = comments;

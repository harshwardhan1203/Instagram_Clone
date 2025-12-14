const query = require("../connection");

var likes = function (value) {};

likes.insert_like = async function (user_id, post_id) {
  try {
    let sql = `insert into likes (user_id,post_id) values (?,?);`;
    let data = await query(sql, [user_id, post_id]);
    return data;
  } catch (error) {
    console.log(error);
    return 0;
  }
};

likes.delete_like = async function (user_id, post_id) {
  try {
    let sql = `delete from likes where user_id=? AND post_id=?;`;
    let data = await query(sql, [user_id, post_id]);
    return data;
  } catch (error) {
    console.log(error);
    return 0;
  }
};

likes.total_like = async function (post_id) {
  try {
    let sql = `SELECT COUNT(*) AS total_likes FROM likes WHERE post_id = ?;`;
    let data = await query(sql,[post_id]);
    return data;
  } catch (error) {
    console.log(error);
    return 0;
  }
};

module.exports = likes;

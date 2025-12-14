const query = require("../connection");

var posts = function (value) {};

posts.insert_post = async function (user_id, image_url, caption) {
  try {
    let sql = ` insert into posts (user_id,image_url,caption) values (?,?,?);`;
    let data = await query(sql, [user_id, image_url, caption]);
    return data;
  } catch (error) {
    console.log(error);
    return 0;
  }
};
posts.delete_post = async function (user_id, post_id) {
  try {
    let sql = ` delete from posts where user_id=? AND id= ?;`;
    let data = await query(sql, [user_id, post_id]);
    return data;
  } catch (error) {
    console.log(error);
    return 0;
  }
};

posts.get_all_post = async function () {
  try {
    let sql = `select * from posts ;`;
    let data = query(sql);
    return data;
  } catch (error) {
    console.log(error);
    return 0;
  }
};

posts.get_all_mine_post = async function (user_id) {
  try {
    let sql = `select * from posts where user_id=? ;`;
    let data = query(sql, [user_id]);
    return data;
  } catch (error) {
    console.log(error);
    return 0;
  }
};
module.exports = post;

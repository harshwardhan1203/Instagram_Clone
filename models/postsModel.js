const query = require("../connection");

var post = function (value) {};

post.insert_post = async function (user_id, image_url, caption) {
  try {
    let sql = ` insert into posts (user_id,image_url,caption) values (?,?,?);`;
    let data = await query(sql, [user_id, image_url, caption]);
    return data;
  } catch (error) {
    console.log(error);
    return 0;
  }
};

module.exports = post;

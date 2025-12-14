const query = require("../connection");

var followers = function (value) {};

followers.insert_follow = async function (follower_id, following_id) {
  try {
    let sql = `insert into followers (follower_id,following_id) values (?,?);`;
    let data = await query(sql, [follower_id, following_id]);
    return data;
  } catch (error) {
    console.log(error);
    return 0;
  }
};

followers.delete_follow = async function (follower_id, following_id) {
  try {
    let sql = `delete from followers where follower_id= ? AND following_id= ? ;`;
    let data = await query(sql, [follower_id, following_id]);
    return data;
  } catch (error) {
    console.log(error);
    return 0;
  }
};

followers.total_followers = async function (follower_id) {
  try {
    let sql = ` select count(*) as total_followers from followers where following_id=?;`;
    let data = await query(sql, [follower_id]);
    return data;
  } catch (error) {
    console.log(error);
    return 0;
  }
};

followers.total_followings = async function (follower_id) {
  try {
    let sql = ` select count(*) as total_followers from followers where follower_id=?;`;
    let data = await query(sql, [follower_id]);
    return data;
  } catch (error) {
    console.log(error);
    return 0;
  }
};

module.exports = followers;

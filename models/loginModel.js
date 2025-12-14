const query = require("../connection");

var loginData = function (value) {};

loginData.verify_user = async function (hashedPassword) {
  try {
    let sql = `select id from user where password_hash=?;`;
    let data = await query(sql, [hashedPassword]);
    return data;
  } catch (error) {
    console.log(error);
    return 0;
  }
};

module.exports = loginData;

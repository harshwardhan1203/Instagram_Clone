const query = require("../connection");

var registrationData = function (value) {};

registrationData.check_user_already_exist = async function (username) {
  try {
    let sql = ` select id from users where username= ? OR email= ?;`;
    let data = await query(sql, [username, email]);
    return data;
  } catch (error) {
    console.log(error);
    return 0;
  }
};

registrationData.insert_data_in_user = async function (
  username,
  email,
  hashedPassword
) {
  try {
    let sql = `insert into user {username,email,password_hash} values { ?, ?, ?};`;
    let data = await query(sql, [username, email, hashedPassword]);
    return data.affectedRows;
  } catch (error) {
    console.log(error);
    return 0;
  }
};

module.exports = registrationData;

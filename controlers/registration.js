const registrationData = require("../models/regitrationModel.js");
const bcrypt = require("bcrypt");
const validator = require("email-validator");

exports.register_data = async (req, res) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    return res.status(400).json({ message: "all fields required" });
  }

  if (username.length >= 50) {
    return res
      .status(400)
      .json({ message: " username length should be less than 50" });
  }

  if (!validator.validate(email)) {
    return res.status(400).json({ message: "Invalid email address" });
  }

  const user_or_email_already_exists =
    await registrationData.check_user_already_exist(username);

  if (user_already_exists.length) {
    return res.status(409).json({ message: "User already exists" });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  let success = await registrationData.insert_data_in_user(
    username,
    email,
    hashedPassword
  );

  if (success) {
    return res.status(200).json({ message: "user inserted successfully" });
  }
  return res.status(409).json({ message: "error inserting user data" });
};

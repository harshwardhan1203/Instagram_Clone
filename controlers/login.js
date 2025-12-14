const loginData = require("../models/loginModel");
const bcrypt = require("bcrypt");
const validator = require("email-validator");
const jwt = require("jsonwebtoken");

exports.login_data = async (req, res) => {
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

  const hashedPassword = await bcrypt.hash(password, 10);

  let password_is_correct = await loginData.verify_user(hashedPassword);
  if (!password_is_correct.length) {
    return res.status(200).json({ message: " incorrect password" });
  }

  let payload = {
    username: username,
    email: email,
    password: password,
    user_id: password_is_correct[0],
  };
  const accessToken = await jwt.sign(payload, process.env.ACCESS_TOKEN, {
    expiresIn: "20d",
  });
  const refreshToken = await jwt.sign(
    accessToken,
    process.env.REFRESH_TOKEN,
    (user, err) => {
      if (err) {
        return res.status(401).json({ message: err });
      }
    }
  );

  return res
    .status(200)
    .json({
      message: "login succesfull",
      accessToken: accessToken,
      refreshToken: refreshToken,
    });
};

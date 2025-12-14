const jwt = require("jsonwebtoken");

function autheticateUser(req, res, next) {
  let authToken = req.headers["authorization"];
  let token = authToken && authToken.split(" ")[1];
  if (token == null) {
    return res.status(401).json({ message: "no token found" });
  }
  jwt.verify(token, process.env.ACCESS_TOKEN, (err, user) => {
    if (err) {
      return res.status(403).json({ message: "Invalid token" });
    }
    req.userData = user;
    next();
  });
}

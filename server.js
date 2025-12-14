require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const registrationRoute = require("./routes/registrationRoute");
const loginRoute = require("./routes/loginRoute");
const postsRoute = require("./routes/postsRoute");
const likesRoute = require("./routes/likesRoute");
const followRoute = require("./routes/followersRoute");
const commentRoute = require("./routes/commentsRoute");

app.use("/api", registrationRoute);
app.use("/api", loginRoute);
app.use("/api", postsRoute);
app.use("/api", likesRoute);
app.use("/api", followRoute);
app.use("/api", commentRoute);

app.listen(port, (err) => {
  console.log(`running at port ${port}`);
});

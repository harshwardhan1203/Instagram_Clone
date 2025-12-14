const express = require("express");
const router = express.Router();

const login_route = require("../controlers/login");

router.route("/login").post(login_route.login_data);

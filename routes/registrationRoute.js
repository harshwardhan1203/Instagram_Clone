const express = require("express");
const router = express.Router();

const registration_route = require("../controlers/registration");

router.route("/register").post(registration_route.register_data);

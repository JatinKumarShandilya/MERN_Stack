const express = require("express");
const authcontroller = require("../controller/auth-controller");
const signupSchema = require("../validators/auth-validator");
const validate = require("../middlewares/validate-middleware");

const router = express.Router();

router.route("/").get(authcontroller.home);

router.route("/register").post( validate(signupSchema), authcontroller.register);
router.route("/login").post(authcontroller.login);

module.exports = router;
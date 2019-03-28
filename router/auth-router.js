const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const passport = require("passport");

router.get("/", (req, res) =>
  res.json({
    msg: "connected with root API route successfully."
  })
);

router.post("/signup", authController.signup);

router.post(
  "/login",
  passport.authenticate("local", { failureRedirect: "/" }),
  authController.login
);

router.get("/logout", authController.logout);

module.exports = router;

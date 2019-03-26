const express = require("express");
const router = express.Router();
const authController = require("./../controllers/authController");

router.get("/", (req, res) =>
  res.json({
    msg: "connected with root API route successfully."
  })
);

router.post("/signup", authController.signup);

router.post("/login", authController.login);

module.exports = router;

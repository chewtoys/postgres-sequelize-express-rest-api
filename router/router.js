const express = require("express");
const router = express.Router();

router.get("/", (req, res) =>
  res.json({
    msg: "connected with root API route successfully."
  })
);

const isValidUser = user => {
  console.log("user validated");
  return true;
};

router.post("/signup", (req, res, next) => {
  // change from callback to designated Controller
  if (isValidUser(req.body)) {
    // should use a query from /queries folder that is responsible for creating users
    res.json({
      msg: "signup"
    });
  } else {
    next(new Error("Invalid User"));
  }
});

router.post("/login", (req, res, next) => {
  // change from callback to designated Controller
  if (isValidUser(req.body)) {
    // should use a query from /queries folder that is responsible for creating users
    res.json({
      msg: "login"
    });
  } else {
    next(new Error("Invalid User"));
  }
});

module.exports = router;

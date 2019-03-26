const express = require("express");
const router = express.Router();

router.get("/", (req, res) =>
  res.json({
    msg: "msg from server"
  })
);

const isValidUser = user => {
  console.log("user validated");
  return true;
};

router.post("/signup", (req, res, next) => {
  if (isValidUser(req.body)) {
      // should use a query from /queries folder that is responsible for creating users
    res.json({
      msg: "signup"
    });
  } else {
    next(new Error("Invalid User"));
  }
});
module.exports = router;

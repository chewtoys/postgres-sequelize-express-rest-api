const User = require("./../models/users");

class AuthController {
  static signup(req, res, next) {
    // username, email, password validators
    console.log("req.body:", req.body);
    if (!req.body.username) {
      res.json({ error: "Username cannot be empty." });
    }

    const userData = {
      username: req.body.username,
      email: req.body.email,
      password: req.body.password
    };

    User.findOne({
      where: { email: req.body.email }
    }).then(user => {
      if (!user) {
        console.log("no user");
        User.create(userData);
        res.json(userData);
      } else {
        console.log("user exists");
        res.json({ error: "User already exists." });
      }
    });

    // should use a query from /queries folder that is responsible for creating users
  }

  static login(req, res, next) {
    // username, email, password validators
    console.log("req.body:", req.body);
    if (!req.body.username) {
      res.json({ error: "Username cannot be empty." });
    }

    const userData = {
      username: req.body.username,
      email: req.body.email,
      password: req.body.password
    };

    User.findOne({
      where: { email: req.body.email }
    }).then(user => {
      if (!user) {
        console.log("no user found");
        res.json({ error: "No User Found" });
      } else {
        console.log("user exists");
      }
      res.json(userData);
    });
  }
}

module.exports = AuthController;

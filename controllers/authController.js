class AuthController {
  static signup(req, res, next) {
    // change from callback to designated Controller
    if (isValidUser(req.body)) {
      // should use a query from /queries folder that is responsible for creating users
      res.json({
        msg: "signup"
      });
    } else {
      next(new Error("Invalid User"));
    }
  }

  static login(req, res, next) {
    // change from callback to designated Controller
    if (isValidUser(req.body)) {
      // should use a query from /queries folder that is responsible for creating users
      res.json({
        msg: "login"
      });
    } else {
      next(new Error("Invalid User"));
    }
  }
}

module.exports = AuthController;

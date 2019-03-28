const session = require("express-session");

module.exports = function(app) {
  app.use(
    session({
      secret: "some_secret",
      resave: false,
      saveUninitialized: false
    })
  );
};

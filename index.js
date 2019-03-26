const express = require("express");
const app = express();
const Sequelize = require("sequelize");
const User = require("./models/users");
const Router = require("./router/router");
const dotenv = require("dotenv").config();
const sequelize = require("./sequelize");
const bodyParser = require("body-parser");
const session = require("express-session");
const PORT = process.env.PORT || 3000;
const parseurl = require("parseurl");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const initPassport = require("./initPassport");

app.listen(PORT, () => {
  console.log("server listening on port:", PORT);
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(
  session({
    secret: "4564f6s4fdsfdfd",
    resave: false,
    saveUninitialized: false
  })
);

initPassport(app);

app.use("/api", Router);

app.use(function(req, res, next) {
  if (!req.session.views) {
    req.session.views = {};
  }

  // get the url pathname
  var pathname = parseurl(req).pathname;

  // count the views
  req.session.views[pathname] = (req.session.views[pathname] || 0) + 1;

  next();
});

app.get("/foo", function(req, res, next) {
  res.send("you viewed this page " + req.session.views["/foo"] + " times");
});

app.get("/bar", function(req, res, next) {
  res.send("you viewed this page " + req.session.views["/bar"] + " times");
});
// error handler
// app.use(function(req, res, next) {
//     var err = new Error('Not Found');
//     err.status = 404;
//     next(err);
//   });

//   // error handler
//   // no stacktraces leaked to user unless in development environment
//   app.use(function(err, req, res, next) {
//     res.status(err.status || 500);
//     res.render('error', {
//       message: err.message,
//       error: (app.get('env') === 'development') ? err : {}
//     });

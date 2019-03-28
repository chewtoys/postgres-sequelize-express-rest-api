const express = require("express");
const app = express();

// *** Routers *** //
const authRouter = require("./router/auth-router");
const questionRouter = require("./router/question-router");

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const PORT = process.env.PORT || 3000;
const parseurl = require("parseurl");
const passport = require("passport");
const initPassport = require("./initPassport");

app.listen(PORT, () => {
  console.log("server listening on port:", PORT);
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());

app.use(
  session({
    secret: "some_secret",
    resave: false,
    saveUninitialized: false
  })
);

initPassport(app);

app.use("/api", authRouter);
app.use("/question", questionRouter);

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

app.get(
  "/bar",
  passport.authenticate("local", { failureRedirect: "/" }),
  function(req, res, next) {
    res.send("you viewed this page " + req.session.views["/bar"] + " times");
  }
);

app.get("/logout", function(req, res) {
  req.session.destroy(function(err) {
    res.redirect("/"); //Inside a callback… bulletproof!
  });
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

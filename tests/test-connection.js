const sequelize = require("./../sequelize");

sequelize // require sequelize instance first
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch(err => {
    console.error("Unable to connect to the database:", err);
  });

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

const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const User = require("./models/users");

module.exports = function(app) {
  app.use(passport.initialize());
  app.use(passport.session());

  passport.use(
    new LocalStrategy(function(username, password, done) {
      console.log("inside User findOne query");
      User.findOne({
        where: {
          username: username
        }
      }).then(function(user) {
        console.log("user verify method:", user);
        if (user == null) {
          console.log("user is null.");
          return done(null, false, { message: "Incorrect credentials." });
        }
        if (!user.verifyPassword(password)) {
          console.log("verifed password failed");
          return done(null, false, { message: "Incorrect credentials." });
        }
        return done(null, user);
      });
    })
  );

  passport.serializeUser(function(user, done) {
    done(null, user.id);
  });

  passport.deserializeUser(function(id, done) {
    User.findOne({
      where: {
        id: id
      }
    }).then(function(user) {
      if (user == null) {
        done(new Error("Wrong user id."));
      }

      done(null, user);
    });
  });
};

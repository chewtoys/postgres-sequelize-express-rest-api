const express = require("express");
const app = express();
const Sequelize = require("sequelize");
const User = require("./models/users");
const Router = require("./router/router");
const dotenv = require("dotenv").config();
const sequelize = require("./sequelize");

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("server listening on port:", PORT);
});

app.use("/", Router);

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

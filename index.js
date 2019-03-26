const express = require("express");
const app = express();
const Sequelize = require("sequelize");
const User = require("./models/users");
const Router = require("./router/router");
const dotenv = require("dotenv").config();
const sequelize = require("./sequelize");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.listen(PORT, () => {
  console.log("server listening on port:", PORT);
});

app.use("/api", Router);

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

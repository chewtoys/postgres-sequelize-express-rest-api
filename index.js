const express = require("express");
const app = express();
const Sequelize = require("sequelize");
const User = require("./models/users");
const Router = require("./router/router");
const dotenv = require("dotenv").config();
const PORT = process.env.PORT || 3100;

app.listen(PORT, () => {
  console.log("server listening on port:", PORT);
});

// connection string
// todo: move constructor to factory file
const sequelize = new Sequelize(process.env.POSTGRES);

app.use("/auth", Router);

app.get("/", (req, res) => {
  console.log("server running on port:", PORT);
});

const express = require("express");
const app = express();

const Sequelize = require("sequelize");
const User = require("./models/users");
const Router = require("./router/router");

require("dotenv").config();

const PORT = process.env.PORT || 3100;

app.listen(PORT, () => {
  console.log("server listening on port:", PORT);
});

// connection string
// todo: move credentials to a serparate file - .env
const sequelize = new Sequelize(
  "postgres://postgres:postgres@localhost:5432/authdb"
);

// testing connection to local postgres
// todo: move to a serparate file

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch(err => {
    console.error("Unable to connect to the database:", err);
  });

// creating users table (if not already exists)
// todo: move to a serparate file

// router

app.use("/auth", Router);

app.get("/", (req, res) => {
  console.log("server running on port:", PORT);
});

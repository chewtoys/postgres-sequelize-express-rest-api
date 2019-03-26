const dotenv = require("dotenv").config();

var Sequelize = require("sequelize"),
  sequelize = new Sequelize(process.env.POSTGRES_DEV);

module.exports = sequelize;

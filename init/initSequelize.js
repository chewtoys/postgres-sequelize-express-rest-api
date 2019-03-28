/**
 * Construct a singleton sequelize object to query the database
 *
 * @returns {object} - Sequelize object
 * @description: By default when you module.exports a javascript object, it is a singleton.
 */

const dotenv = require("dotenv").config();

var Sequelize = require("sequelize"),
  sequelize = new Sequelize(process.env.POSTGRES_DEV);

module.exports = sequelize;

require("dotenv").config();

const Sequelize = require("sequelize");

const self = module.exports;
let sequelize;

/**
 * Construct a singleton sequelize object to query the database
 *
 * @returns {object} - Sequelize object
 */

exports.initialize = () => {
  if (!sequelize) {
    sequelize = new Sequelize(
      "postgres://postgres:postgres@localhost:5432/authdb"
    );
  }

  return sequelize;
};

module.exports = self.initialize();

require("dotenv").config();

const Sequelize = require("sequelize");

let sequelize;

/**
 * Construct a singleton sequelize object to query the database
 *
 * @returns {object} - Sequelize object
 */

const initialize = () => {
  if (!sequelize) {
    sequelize = new Sequelize(process.env.POSTGRES_DEV);
  }

  return sequelize;
};

module.exports.initialize = initialize();

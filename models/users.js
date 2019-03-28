const Sequelize = require("sequelize");
const sequelize = require("../init/initSequelize");
const bcrypt = require("bcrypt");
const Question = require("./questions");
const dotenv = require("dotenv").config();

const User = sequelize.define(
  "users",
  {
    username: {
      type: Sequelize.STRING,
      unique: true,
      allowNull: false
    },
    email: {
      type: Sequelize.STRING,
      unique: true,
      allowNull: false
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false
    }
  },
  {
    hooks: {
      beforeCreate: user => {
        const salt = bcrypt.genSaltSync();
        user.password = bcrypt.hashSync(user.password, salt);
      }
    }
  }
);

User.prototype.verifyPassword = function(password) {
  console.log(
    "verifyPassword Called.",
    bcrypt.compareSync(password, this.password)
  );
  return bcrypt.compareSync(password, this.password);
};

// create all the defined tables in the specified database.
sequelize
  .sync()
  .then(() =>
    console.log(
      "users table has been successfully created, if one doesn't exist"
    )
  )
  .catch(error => console.log("This error occured", error));

// User.hasMany(Question); // Will add userId to Task model
User.hasMany(Question, { foreignKey: "userId" });

// export User model for use in other files.
module.exports = User;

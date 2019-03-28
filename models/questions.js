const Sequelize = require("sequelize");
const sequelize = require("../init/initSequelize");
const dotenv = require("dotenv").config();
const User = require("./users");
const Question = sequelize.define("questions", {
  title: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

sequelize
  .sync()
  .then(() =>
    console.log(
      "users table has been successfully created, if one doesn't exist"
    )
  )
  .catch(error => console.log("This error occured", error));

// Question.belongsTo(User);

// export Question model for use in other files.
module.exports = Question;

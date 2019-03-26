// const sequelize = require("./../init/init");
// const Sequelize = require("sequelize");

// const User = sequelize.define(
//   "User",
//   {
//     // attributes
//     username: {
//       type: Sequelize.STRING,
//       allowNull: false
//     },
//     password: {
//       type: Sequelize.STRING
//       // allowNull defaults to true
//     }
//   },
//   {
//     // options
//   }
// );

// module.exports.User = User;

let Sequelize = require("sequelize");
let bcrypt = require("bcrypt");
const dotenv = require("dotenv").config();
// create a sequelize instance with our local postgres database information.
let sequelize = new Sequelize(process.env.POSTGRES_DEV);

// setup User model and its fields.
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
    },
    instanceMethods: {
      validPassword: function(password) {
        return bcrypt.compareSync(password, this.password);
      }
    }
  }
);

// create all the defined tables in the specified database.
sequelize
  .sync()
  .then(() =>
    console.log(
      "users table has been successfully created, if one doesn't exist"
    )
  )
  .catch(error => console.log("This error occured", error));

// export User model for use in other files.
module.exports = User;

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

var Sequelize = require("sequelize");
var bcrypt = require("bcrypt");

// create a sequelize instance with our local postgres database information.
var sequelize = new Sequelize(
  "postgres://postgres:postgres@localhost:5432/authdb"
);

// setup User model and its fields.
var User = sequelize.define(
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

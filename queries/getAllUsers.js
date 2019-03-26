const User = require("./../models/users");

const findAllUsers = () => {
  User.findAll().then(users => {
    console.log("All users:", JSON.stringify(users, null, 4));
  });
};

module.exports.findAllUsers = findAllUsers;

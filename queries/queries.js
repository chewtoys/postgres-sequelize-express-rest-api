const User = require("../models/users");
const Question = require("../models/questions");

const findAllUsers = () => {
  User.findAll().then(users => {
    console.log("All users:", JSON.stringify(users, null, 4));
  });
};

const getUserQuestions = username => {
  User.findOne({
    where: { username: username }
  })
    .then(user =>
      Question.findAll({
        where: {
          userId: user.id
        }
      })
    )
    .then(questions => questions.forEach(question => console.log(question)));
};

module.exports.findAllUsers = findAllUsers;
module.exports.getUserQuestions = getUserQuestions;

const User = require("./../models/users");
const Question = require("./../models/questions");
const { getUserQuestions } = require("./../queries/queries");

class QuestionController {
  static userQuestions(req, res) {
    console.log("inside userQuestions:", req.param("username"));
    User.findOne({
      where: { username: req.param("username") }
    })
      .then(user =>
        Question.findAll({
          where: {
            userId: user.id
          }
        })
      )
      .then(questions => questions.forEach(question => console.log(question)));
  }
}

module.exports = QuestionController;

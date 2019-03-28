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
      .then(questions => res.send(questions));
  }
  static addQuestion(req, res) {
    console.log("logged in user:", req.user);
    console.log("request body:", req.body);
    const newQuestion = {
      title: req.body.title,
      description: req.body.description,
      userId: req.user.id
    };
    Question.create(newQuestion);
  }

  static loggedInUserQuestions(req, res) {
    User.findOne({
      where: { id: req.user.id }
    })
      .then(user =>
        Question.findAll({
          where: {
            userId: user.id
          }
        })
      )
      .then(questions => res.send(questions));
  }
}

module.exports = QuestionController;

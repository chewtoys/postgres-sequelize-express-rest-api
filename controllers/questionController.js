const User = require("./../models/users");
const Question = require("./../models/questions");
const getUserQuestions = require("./../queries/queries");

class QuestionController {
  static userQuestions(username) {
    const results = getUserQuestions(username);
    console.log("results:", results);
  }
}

module.exports = QuestionController;

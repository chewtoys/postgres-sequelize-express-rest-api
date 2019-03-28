const express = require("express");
const router = express.Router();
const questionController = require("../controllers/questionController");

router.get("/user_questions/:username", questionController.userQuestions);
router.get("/user_questions", questionController.loggedInUserQuestions);
router.post("/user_questions", questionController.addQuestion);

module.exports = router;

const express = require("express");
const router = express.Router();
const questionController = require("../controllers/questionController");

router.get("/user_questions/:username", questionController.userQuestions);

module.exports = router;

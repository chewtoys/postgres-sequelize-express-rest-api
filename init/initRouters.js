// *** Routers *** //
const authRouter = require("./../router/auth-router");
const questionRouter = require("./../router/question-router");

module.exports = function(app) {
  app.use("/auth", authRouter);
  app.use("/question", questionRouter);
};

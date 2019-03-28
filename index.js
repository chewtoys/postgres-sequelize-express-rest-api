const express = require("express");
const app = express();

// *** Routers *** //
const authRouter = require("./router/auth-router");
const questionRouter = require("./router/question-router");

const session = require("express-session");
const PORT = process.env.PORT || 3000;
const parseurl = require("parseurl");
const passport = require("passport");
const initPassport = require("./initPassport");
const initParsers = require("./initParsers");
const initRouters = require("./initRouters");
const initExpressSession = require("./initExpressSession");

app.listen(PORT, () => {
  console.log("server listening on port:", PORT);
});

initParsers(app);

initExpressSession(app);

initPassport(app);

initRouters(app);

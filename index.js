const express = require("express");
const app = express();

const initPassport = require("./initPassport");
const initParsers = require("./initParsers");
const initRouters = require("./initRouters");
const initExpressSession = require("./initExpressSession");

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("server listening on port:", PORT);
});

initParsers(app);

initExpressSession(app);

initPassport(app);

initRouters(app);

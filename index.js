const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

const initPassport = require("./initPassport");
const initExpressSession = require("./initParsers");
const initRouters = require("./initRouters");
const initParsers = require("./initParsers");

app.listen(PORT, () => {
  console.log("server listening on port:", PORT);
});

initParsers(app);

initExpressSession(app);

initPassport(app);

initRouters(app);

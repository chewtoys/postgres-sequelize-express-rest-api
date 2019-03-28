const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const parseurl = require("parseurl");

module.exports = function(app) {
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
  app.use(cookieParser());
};

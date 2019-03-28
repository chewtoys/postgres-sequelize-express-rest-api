/******************** index.js - the root of this application **************
 * @description index.js is where we initialize the node express application, initialize
 * the routes, parsers and authentication middleware.
 * @copyright Itamar Silverstein 2019
 **************************************************************************/

const express = require("express");
const app = express();

/**
 * @description: Passport is the app's authentication middleware. It is used for authenticating users
 * and blocking not logged in users from accessing resources. (for example /question/user_questions resource)
 * the LocalStrategy authentication paradigm is used. passport is working together with express-session
 * for managing the sessions of logged in users and their right to access their resources.
 */
const initPassport = require("./initPassport");

/**
 * @description: Parsers being used in this app are: bodyParser - which help our app analyse the request
 * body and expose it to the user via req.body object. another parser used is cookie-parser which is
 * used as a tool to parse the cookies being stored in the user's browser.
 */
const initParsers = require("./initParsers");

/**
 * @description: Routes in this app: /auth and /question. /auth is every end point that has to do
 * with user authentication (login via /auth/login,  signup via /auth/signup,  logout via /auth/logout)
 */
const initRouters = require("./initRouters");

/**
 * @description: express-session npm module is used for managing the req.session user session object
 */
const initExpressSession = require("./initExpressSession");

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("server listening on port:", PORT);
});

initParsers(app);

initExpressSession(app);

initPassport(app);

initRouters(app);

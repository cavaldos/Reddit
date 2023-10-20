<<<<<<< HEAD
const authRouter = require("./auth.route");
const postRouter = require("./post.route");
const userRouter = require("./user.route");

const subredditRouter = require("./subreddit.route");
//export all routes
module.exports = {
=======

import authRouter from "./auth.route.js";
import userRouter from "./user.route.js"
import postRouter from "./post.route.js";
import subRouter from "./subreddit.route.js";
// export all
export {
>>>>>>> khanh
  authRouter,
  userRouter,
<<<<<<< HEAD

  subredditRouter
};

=======
  postRouter,
  subRouter
};
>>>>>>> khanh

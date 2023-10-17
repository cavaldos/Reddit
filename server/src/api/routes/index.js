const authRouter = require("./auth.route");
const postRouter = require("./post.route");
const userRouter = require("./user.route");

const subredditRouter = require("./subreddit.route");
//export all routes
module.exports = {
  authRouter,
  postRouter,
  userRouter,

  subredditRouter
};


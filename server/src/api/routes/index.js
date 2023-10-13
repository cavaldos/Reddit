const authRouter = require("./auth.route");
const postRouter = require("./post.route");
const userRouter = require("./user.route");
const commentRouter = require("./comment.route");

//export all routes
module.exports = {
  authRouter,
  postRouter,
  userRouter,
  commentRouter,
};

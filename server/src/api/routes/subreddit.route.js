import express from "express";

import subredditController from "../controllers/subreddit.js";
import postController from "../controllers/post.js";
import commentController from "../controllers/comment.js";


const subRouter = express.Router();
subRouter.post("/", subredditController.create);
subRouter.get("/search", subredditController.search);
subRouter.post("/subscribe", subredditController.subscribe);
subRouter.post(
  "/unsubscirbe",
  subredditController.unsubscribe
);
subRouter.post("/post", postController.create);
subRouter.patch("/post/vote", postController.vote);
subRouter.patch("/post/comment", commentController.comment);
subRouter.patch(
  "/post/comment/vote",
  commentController.vote
);

export default subRouter;
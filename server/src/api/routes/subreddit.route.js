<<<<<<< HEAD
const router = require("express").Router();
const subredditController = require("../controllers/subreddit");
const postController = require("../controllers/post");
const commentController = require("../controllers/comment");
const authMiddleware = require ("../middlewares/auth");



router.post("/", authMiddleware.access, subredditController.create);

router.get("/search", subredditController.search);
router.post("/subscribe", authMiddleware.access, subredditController.subscribe);
router.post("/unsubscirbe", authMiddleware.access, subredditController.unsubscribe);
router.post("/post", authMiddleware.access, postController.create);
router.patch("/post/vote", authMiddleware.access, postController.vote);
router.patch("/post/comment", authMiddleware.access, commentController.comment);
router.patch("/post/comment/vote", authMiddleware.access, commentController.vote);
module.exports = router;
=======
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
>>>>>>> khanh

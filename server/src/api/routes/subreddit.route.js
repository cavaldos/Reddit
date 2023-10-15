const router = require("express").Router();
const subredditController = require("../controllers/subreddit");
const postController = require("../controllers/post");
const commentController = require("../controllers/comment");
const authMiddleware = require ("../middlewares/auth");



router.post("/", authMiddleware.access, subredditController.create);
router.get("/search", subredditController.search);
router.post("/post", authMiddleware.access, postController.create);
router.post("/subscribe", authMiddleware.access, subredditController.subscribe);
router.post("/unsubscirbe", authMiddleware.access, subredditController.unsubscribe);
router.patch("/post/comment", authMiddleware.access, commentController.comment);
module.exports = router;

import express from "express";

import postController from "../controllers/post.js";
const postRouter = express.Router();


postRouter.get("/", postController.read);

export default postRouter;
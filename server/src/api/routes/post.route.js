<<<<<<< HEAD
const router = require("express").Router();
const postController = require('../controllers/post');
=======
import express from "express";
>>>>>>> khanh

import postController from "../controllers/post.js";
const postRouter = express.Router();

<<<<<<< HEAD

router.get("/", postController.read);
=======
>>>>>>> khanh

postRouter.get("/", postController.read);

export default postRouter;
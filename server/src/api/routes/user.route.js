<<<<<<< HEAD
const router = require("express").Router();
const userController = require("../controllers/user");
const authMiddleware = require("../middlewares/auth");

router.patch("/username", authMiddleware.access, userController.changeUsername);
router.post("/image", authMiddleware.access, userController.uploadImage);
router.get("/:id/image/", userController.downloadImagine);
router.get("/:id", userController.getUserInfo);
module.exports = router;
=======
import userController from "../controllers/user.js";
import express from "express";
const userRouter = express.Router();

userRouter.get("/getall", userController.getall);

userRouter.patch("/username", userController.changeUsername);
userRouter.post("/image", userController.uploadImage);
userRouter.get("/:id/image/", userController.downloadImagine);
userRouter.get("/:id", userController.getUserInfo);

export default userRouter;
>>>>>>> khanh

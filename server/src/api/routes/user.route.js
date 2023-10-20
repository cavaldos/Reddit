import userController from "../controllers/user.js";
import express from "express";
const userRouter = express.Router();

userRouter.get("/getall", userController.getall);

userRouter.patch("/username", userController.changeUsername);
userRouter.post("/image", userController.uploadImage);
userRouter.get("/:id/image/", userController.downloadImagine);
userRouter.get("/:id", userController.getUserInfo);

export default userRouter;

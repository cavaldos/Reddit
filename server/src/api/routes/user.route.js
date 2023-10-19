import userController from "../controllers/user.js";
import express from "express";
const userRouter = express.Router();


userRouter.get("/getall", userController.getall);
userRouter.get("/:id", userController.getbyid);
userRouter.post("/create", userController.create);
userRouter.put("/:id", userController.update);
userRouter.delete("/:id", userController.delete);

export default userRouter;

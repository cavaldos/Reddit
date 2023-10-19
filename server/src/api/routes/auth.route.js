import authController from "../controllers/auth.js";
import express from "express";

const authRouter = express.Router();

authRouter.get("/login", authController.login);
authRouter.post("/logout", authController.logout);

export default authRouter;

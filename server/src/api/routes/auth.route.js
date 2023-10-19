import authController from "../controllers/auth.js";
import express from "express";
import middlewares from "../middlewares/index.js";
const authRouter = express.Router();

authRouter.get("/login",middlewares.authorizationJWT, authController.login);
authRouter.post("/logout", authController.logout);

export default authRouter;

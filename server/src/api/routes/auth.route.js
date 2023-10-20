<<<<<<< HEAD
const authController = require("../controllers/auth");
const authMiddleware = require("../middlewares/auth");
const router = require("express").Router();

router.post("/", authController.login);
router.get("/signout", authController.logout);
router.post("/register", authController.register);
router.post("/resetPassword", authMiddleware.access, authController.resetPassword);
router.post("/refreshToken", authController.refreshToken);

module.exports = router;
=======
import authController from "../controllers/auth.js";
import express from "express";
import middlewares from "../middlewares/index.js";
const authRouter = express.Router();

authRouter.get("/login",middlewares.authorizationJWT, authController.login);
authRouter.post("/logout", authController.logout);

export default authRouter;
>>>>>>> khanh

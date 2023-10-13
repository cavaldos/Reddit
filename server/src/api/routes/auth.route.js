const authController = require("../controllers/auth");

const router = require("express").Router();

router.post("/", authController.login);
router.get("/signout", authController.logout);
router.post("/register", authController.register);
router.post("/resetPassword", authMiddleware.access, authController.resetPassword);
router.post("/refreshToken", authController.refreshToken);

module.exports = router;

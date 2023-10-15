const router = require("express").Router();
const userController = require("../controllers/user");
const authMiddleware = require("../middlewares/auth");

router.patch("/username", authMiddleware.access, userController.changeUsername);
router.get("/", userController.getUserInfo);
module.exports = router;

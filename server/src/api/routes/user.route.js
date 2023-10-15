const router = require("express").Router();
const userController = require("../controllers/user");
const authMiddleware = require("../middlewares/auth");

router.patch("/username", authMiddleware.access, userController.changeUsername);
router.post("/image", authMiddleware.access, userController.uploadImage);
router.get("/image/:id", userController.downloadImagine);
router.get("/:id", userController.getUserInfo);
module.exports = router;

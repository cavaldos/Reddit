const router = require("express").Router();
const userController = require("../controllers/user");

router.get("/getall", userController.getall);
router.get("/:id", userController.getbyid);
router.post("/create", userController.create);
router.put("/:id", userController.update);
router.delete("/:id", userController.delete);

module.exports = router;

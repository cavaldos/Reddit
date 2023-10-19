import userController from "../controllers/user.js";
const router = require("express").Router();

router.get("/getall", userController.getall);
router.get("/:id", userController.getbyid);
router.post("/create", userController.create);
router.put("/:id", userController.update);
router.delete("/:id", userController.delete);

export default router;

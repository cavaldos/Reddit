import commnetController from "../controllers/comment.js";
const router = require("express").Router();

router.get("/getall", commnetController.getall);
router.get("/:id", commnetController.getbyid);
router.post("/create", commnetController.create);
router.put("/:id", commnetController.update);
router.delete("/:id", commnetController.delete);

export default router;

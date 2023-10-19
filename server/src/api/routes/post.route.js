import postController from "../controllers/post.js";
const router = require("express").Router();


router.get("/getall", postController.getall);
router.get("/:id", postController.getbyid);
router.post("/create", postController.create);
router.put("/:id", postController.update);
router.delete("/:id", postController.delete);

export default router;
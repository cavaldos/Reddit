const router = require("express").Router();
const postController = require("../controllers/post");


router.get("/getall", postController.getall);
router.get("/:id", postController.getbyid);
router.post("/create", postController.create);
router.put("/:id", postController.update);
router.delete("/:id", postController.delete);


module.exports = router;

const router = require("express").Router();
const commnetController = require("../controllers/comment");

router.get("/getall", commnetController.getall);
router.get("/:id", commnetController.getbyid);
router.post("/create", commnetController.create);
router.put("/:id", commnetController.update);
router.delete("/:id", commnetController.delete);

module.exports = router;

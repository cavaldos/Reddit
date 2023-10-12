const router = require("express").Router();
const testController = require("../controllers/index");

router.get("/posttest", testController.test);

module.exports = router;

const router = require("express").Router();
const testController = require("../controllers/index");

router.get("/usertest", testController.test);

module.exports = router;

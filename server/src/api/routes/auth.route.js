const router = require("express").Router();
const testController = require("../controllers/index");

router.get("/authtest", testController.test);

module.exports = router;

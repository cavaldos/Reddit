const router = require("express").Router();

router.get("/v1", (res, req) => {
  console.log("hhehe");
});
router.get("/v2", (res, req) => {
  console.log("auth2");
});
router.get("/v3", (res, req) => {
  console.log("auth3");
});

module.exports = router;

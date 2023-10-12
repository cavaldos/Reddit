const router = require("express").Router();

router.post("/p1", (res, req) => {
  console.log("p1");
});
router.post("/p2", (res, req) => {
  console.log("p1");
});
router.post("/p3", (res, req) => {
  console.log("p1");
});

module.exports = router;

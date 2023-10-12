const router = require("express").Router();

router.get("/get", (res, req) => {
  console.log("p1");
});
router.put("/put", (res, req) => {
  console.log("p1");
});
router.post("/post", (res, req) => {
  console.log("p1");
});


module.exports = router;

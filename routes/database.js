var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/test", function (req, res, next) {
  var data = {
    code: 0,
    data: {
      name: "aaa",
      pwd: "123",
    },
    isSuccess: true,
    msg: "请求成功",
  };

  res.json(data);
});

module.exports = router;

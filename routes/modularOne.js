const express = require('express');
const router = express.Router();
const modularOneModel = require("../lib/modularOneSql");

router.get('/', function(req, res, next) {
  res.end("模块一路由");
  
  // let queryParams = req.query;
  // modularOneModel.queryData(queryParams).then((result) => {
  //   res.json({
  //     successful: true,
  //     data: result,
  //     msg: "",
  //   });
  // }).catch((err) => {
  //   res.end("错误");
  // });
});

module.exports = router;

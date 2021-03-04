const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
  res.send('模块二路由');
});

module.exports = router;

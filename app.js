const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const middlewares = require("./middlewares/middleware"); // 导入自定义中间件

// 解析 Post 请求
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// 处理跨域
app.all('*', (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By",' 3.2.1')
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
});

// 中间件
app.use("/", middlewares.checkLogin);

// 导入相关路由模块
const modularOneRouter = require('./routes/modularOne'); // 模块一路由
const modularTwoRouter = require('./routes/modularTwo'); // 模块二路由

// 使用路由
app.use('/', modularOneRouter);
app.use('/two', modularTwoRouter);

// 设置静态资源访问
app.use(express.static(path.join(__dirname, 'public')));

// 监听 3000 端口
app.listen(3000, () => {
  console.log("App is running at http://127.0.0.1:3000");
});
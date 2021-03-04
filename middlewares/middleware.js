// 检查是否登录
function checkLogin(req, res, next){
  console.log("这里是中间件");
  next();
}

module.exports = {
  checkLogin,
};
const query = require("./mysql");

// 新增数据
let addData = function(value){
  let sql = ``;
  return query(sql, value);
};

// 删除数据
let deleteData = function(value){
  let sql = ``;
  return query(sql, value);
};

// 修改数据
let changeData = function(value){
  let sql = ``;
  return query(sql, value);
};

// 查询数据
let queryData = function(value){
  let sql = ``;
  return query(sql, value);
};

module.exports = {
  addData,
  deleteData,
  changeData,
  queryData,
};

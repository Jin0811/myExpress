const mysql = require('mysql');
const config = require('../config/config.js')

// 数据库连接池
var pool  = mysql.createPool({
  host: config.database.HOST,
  user: config.database.USERNAME,
  password: config.database.PASSWORD,
  database: config.database.DATABASE
});

// 操作sql 
let query = function(sql, values){
  return new Promise((resolve, reject) => {
    pool.getConnection((err, connection) => {
      if(err){
        reject(err)
      }else{
        connection.query(sql, values, (error, rows) => {
          if(error){
            reject(error);
          }else{
            resolve(rows);
          }
          connection.release();
        });
      }
    });
  });
};

module.exports = query;
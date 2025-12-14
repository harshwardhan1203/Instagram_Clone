const mysql = require("mysql2");

const dbConfig = {
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
};

dbConfig.connectionLimit = 10;

const pool = mysql.createPool(dbConfig);

pool.query("SELECT 1 + 1 AS solution", function (error, results) {
  if (error) {
    throw error;
  }
  console.log("The solution is: ", results[0].solution);
});

let query = (sql, values = []) => {
  // console.log(sql,", values: ", values)
  return new Promise((resolve, reject) => {
    pool.getConnection((err, connection) => {
      if (err) {
        reject(err);
      } else {
        connection.query(sql, values, (err, rows) => {
          if (err) {
            reject(err);
          } else {
            resolve(rows);
          }
          connection.release();
        });
      }
    });
  });
};

module.exports = query;

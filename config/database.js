var mysql = require('promise-mysql')
var { DB_HOST, DB_USER, DB_PASS, DB_NAME } = require('./constants')

// var pool = mysql.createPool({
//   connectionLimit: 10,
//   host: DB_HOST,
//   user: DB_USER,
//   password: DB_PASS,
//   database: DB_NAME
// })

// pool.getConnection((err, connection) => {
//   if (err) {
//       if (err.code === 'PROTOCOL_CONNECTION_LOST') {
//           console.error('Database connection was closed.')
//       }
//       if (err.code === 'ER_CON_COUNT_ERROR') {
//           console.error('Database has too many connections.')
//       }
//       if (err.code === 'ECONNREFUSED') {
//           console.error('Database connection was refused.')
//       }
//   }
//   if (connection) connection.release()
//   return
// })

// module.exports = pool

// var connection = mysql.createPool({
//   connectionLimit: 10,
//   host: DB_HOST,
//   user: DB_USER,
//   password: DB_PASS,
//   database: DB_NAME
// })

const dbConfig = {
  connectionLimit: 10,
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASS,
  database: DB_NAME
}

module.exports = async () => {
  try {
    let pool;
    let con;
    if (pool) con = pool.getConnection();
    else {
        pool = await mysql.createPool(dbConfig);
        con = pool.getConnection();
    }
    return con;
  } catch (ex) {
    throw ex;
  }
}
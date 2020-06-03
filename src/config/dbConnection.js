const mysql = require('mysql');

module.exports = () => {
  return mysql.createConnection({
    host: '34.69.183.128:3306',
    user: 'root',
    password: 'root',
    database: 'spotify'
  });
}
const mysql = require('mysql');

module.exports = () => {
  return mysql.createConnection({
    host: 'jairbedoya.com',
    user: 'root',
    password: '1997Emelec',
    database: 'Spotify'
 });
}

const dbConnection = require('../../config/dbConnection');

module.exports = app => {

  const connection = dbConnection();

  app.get('/views', (req, res) => {
    connection.query('SELECT * FROM reporte_ingreso_usuarios_view', (err, result) => {
      res.render('views/views', {
        views: result
      });
    });
  });
};

const dbConnection = require('../../config/dbConnection');

module.exports = app => {
	const connection = dbConnection();


  	app.get('/', (req, res) => {
  		connection.query('SELECT * FROM prueba.reporte_ingreso_usuarios_view', (err, result) => {
  		  console.log(result);
   		  res.render('views/views', {
    	  views: result
	   	  });
 		});
  	});
}
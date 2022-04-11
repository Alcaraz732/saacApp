const { response } = require('express');
const { connection } = require('../database/configbd');

const getCategorias = async(req, res) => {
    connection.getConnection(function(err, connection) {

        // Executing the MySQL query (select all data from the 'users' table).
        connection.query('SELECT * FROM categoria', function(error, results, fields) {
            // If some error occurs, we throw an error.
            if (error) throw error;

            // Getting the 'response' from the database and sending it to our route. This is were the data is.
            res.send(results)
        });
    });

}
const getCategoriasByTablero = async(req, res) => {
    connection.getConnection(function(err, connection) {
        const uid = req.params.id;
        // Executing the MySQL query (select all data from the 'users' table).
        connection.query('SELECT * FROM Categoria Where Tablero=' + uid, function(error, results, fields) {
            // If some error occurs, we throw an error.
            if (error) throw error;

            // Getting the 'response' from the database and sending it to our route. This is were the data is.
            res.send(results)
        });
    });

}

module.exports = { getCategorias, getCategoriasByTablero }
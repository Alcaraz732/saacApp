const express = require('express');
const bodyParser = require('body-parser');
const { connection } = require('./database/configbd');

// Starting our app.
const app = express();
app.use(bodyParser.json());
app.use(express.json());

app.use('/botones', require('./routes/boton'));
app.use('/categorias', require('./routes/categoria'));
app.use('/tableros', require('./routes/tablero'));
// Starting our server.
app.listen(2000, () => {
    console.log('Escuchando puerto 2000');
});
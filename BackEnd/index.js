const express = require('express');
//const bodyParser = require('body-parser');
const { connection } = require('./database/configbd');

const cors = require("cors");

const app = express();

var corsOptions = {
    origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// Starting our app.



app.use(express.json());
require("./routes/boton.js")(app);
require("./routes/categoria.js")(app);
require("./routes/tablero.js")(app);
require("./routes/user.js")(app);

//app.use('/botones', require('./routes/boton'));
//app.use('/categorias', require('./routes/categoria'));
//app.use('/tableros', require('./routes/tablero'));
// Starting our server.
app.listen(2000, '0.0.0.0', function() {
    console.log('Listening to port:  ' + 2000);
});
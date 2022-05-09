const sql = require("./db.js");
var jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { generarDatos } = require('../helpers/GenerateUser');
var token;

process.env.SECRET_KEY = "devesh";

const User = function(user) {

    this.email = user.email;
    this.nombre = user.nombre;
    this.password = user.password;
    this.discapacidad = user.discapacidad;

};

User.create = (newBoton, result) => {
    const salt = bcrypt.genSaltSync();
    const cpassword = bcrypt.hashSync(newBoton.password, salt);
    newBoton.password = cpassword;



    sql.query("INSERT INTO usuario SET ?", newBoton, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        generarDatos(newBoton.email, newBoton.nombre);
        console.log("registered user: ", { id: res.insertId, ...newBoton });
        result(null, { id: res.insertId, ...newBoton });
    });
};

User.login = (user, result) => {
    var email = user.email;
    var password = user.password;
    console.log(user);

    sql.query("SELECT * FROM usuario WHERE email = ?", email, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        if (res.length > 0) {
            if (bcrypt.compareSync(password, res[0].password)) {
                console.log("Llega");
                var stringified = JSON.stringify(res[0]);
                var usu = JSON.parse(stringified)
                let token = jwt.sign(usu, process.env.SECRET_KEY, {
                    expiresIn: 1440
                });


                var stringified = JSON.stringify(token);
                var parsedObj = JSON.parse(stringified);
                console.log("registered user: ", { id: res.insertId, ...user });
                result(null, { email: email, nombre: res[0].nombre, token: parsedObj });
            } else {
                result(err, null);

            }
        } else {
            console.log("error: ", err);
            result(err, null);
        }


    });
};

User.findById = (id, result) => {
    sql.query(`SELECT * FROM usuario WHERE ID = ${id}`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        if (res.length) {
            console.log("found boton: ", res[0]);
            result(null, res[0]);
            return;
        }

        // not found Tutorial with the id
        result({ kind: "not_found" }, null);
    });
};

User.getAll = (title, result) => {
    let query = "SELECT * FROM usuario";

    if (title) {
        query += ` WHERE email LIKE '%${title}%'`;
    }

    sql.query(query, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        console.log("Usuarios: ", res);
        result(null, res);
    });
};



User.updateById = (id, tutorial, result) => {
    sql.query(
        "UPDATE tutorials SET title = ?, description = ?, published = ? WHERE id = ?", [tutorial.title, tutorial.description, tutorial.published, id],
        (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(null, err);
                return;
            }

            if (res.affectedRows == 0) {
                // not found Tutorial with the id
                result({ kind: "not_found" }, null);
                return;
            }

            console.log("updated User: ", { id: id, ...tutorial });
            result(null, { id: id, ...tutorial });
        }
    );
};

User.remove = (id, result) => {
    sql.query("DELETE FROM usuario WHERE email = ?", id, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        if (res.affectedRows == 0) {
            // not found Tutorial with the id
            result({ kind: "not_found" }, null);
            return;
        }

        console.log("deleted user with email: ", id);
        result(null, res);
    });
};

User.removeAll = result => {
    sql.query("DELETE FROM usuario", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        console.log(`deleted ${res.affectedRows} users`);
        result(null, res);
    });
};

module.exports = User;
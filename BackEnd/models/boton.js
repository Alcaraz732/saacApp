const sql = require("./db.js");

// constructor
const Boton = function(boton) {
    // this.ID = boton.ID;
    this.Nombre = boton.Nombre;
    this.Color = boton.Color;
    this.Imagen = boton.Imagen;
    this.Sonido = boton.Sonido;
    this.Favorito = boton.Favorito;
    //this.SonidoGrabado = boton.SonidoGrabado;
    this.categoria = boton.categoria;
};

Boton.create = (newBoton, result) => {
    sql.query("INSERT INTO boton SET ?", newBoton, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        console.log("created boton: ", { id: res.insertId, ...newBoton });
        result(null, { id: res.insertId, ...newBoton });
    });
};

Boton.findById = (id, result) => {
    sql.query(`SELECT * FROM boton WHERE ID = ${id}`, (err, res) => {
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

Boton.getAll = (title, result) => {
    let query = "SELECT * FROM boton";

    if (title) {
        query += ` WHERE Nombre LIKE '%${title}%'`;
    }

    sql.query(query, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        console.log("Botons: ", res);
        result(null, res);
    });
};

Boton.findByCat = (cat, result) => {
    sql.query(`SELECT * FROM boton WHERE categoria = ${cat}`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        if (res.length) {
            console.log("found boton: ", res);
            result(null, res);
            return;
        }

        // not found Tutorial with the id
        result({ kind: "not_found" }, null);
    });
};

Boton.updateById = (id, tutorial, result) => {
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

            console.log("updated Boton: ", { id: id, ...tutorial });
            result(null, { id: id, ...tutorial });
        }
    );
};

Boton.remove = (id, result) => {
    sql.query("DELETE FROM boton WHERE id = ?", id, (err, res) => {
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

        console.log("deleted boton with id: ", id);
        result(null, res);
    });
};

Boton.removeAll = result => {
    sql.query("DELETE FROM boton", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        console.log(`deleted ${res.affectedRows} botones`);
        result(null, res);
    });
};

module.exports = Boton;
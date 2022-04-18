const sql = require("./db.js");

// constructor
const Tablero = function(tablero) {
    this.ID = tablero.ID;
    this.Nombre = tablero.Nombre;
    this.Color = tablero.Color;
    this.Usuario = boton.Usuario;

};

Tablero.create = (newCat, result) => {
    sql.query("INSERT INTO tablero SET ?", newCat, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        console.log("created tutorial: ", { id: res.insertId, ...newTutorial });
        result(null, { id: res.insertId, ...newTutorial });
    });
};

Tablero.findById = (id, result) => {
    sql.query(`SELECT * FROM tablero WHERE ID = ${id}`, (err, res) => {
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

Tablero.getAll = (title, result) => {
    let query = "SELECT * FROM tablero";

    if (title) {
        query += ` WHERE Nombre LIKE '%${title}%'`;
    }

    sql.query(query, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        console.log("Tableros: ", res);
        result(null, res);
    });
};

Tablero.findByUser = (tab, result) => {
    sql.query(`SELECT * FROM tablero WHERE Usuario = ${tab}`, (err, res) => {
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

Tablero.updateById = (id, tutorial, result) => {
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

            console.log("updated Tablero: ", { id: id, ...tutorial });
            result(null, { id: id, ...tutorial });
        }
    );
};

Tablero.remove = (id, result) => {
    sql.query("DELETE FROM tutorials WHERE id = ?", id, (err, res) => {
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

        console.log("deleted tutorial with id: ", id);
        result(null, res);
    });
};

Tablero.removeAll = result => {
    sql.query("DELETE FROM tutorials", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        console.log(`deleted ${res.affectedRows} tutorials`);
        result(null, res);
    });
};

module.exports = Tablero;
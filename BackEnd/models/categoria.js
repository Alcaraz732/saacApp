const sql = require("./db.js");

// constructor
const Categoria = function(categoria) {
    this.ID = categoria.ID;
    this.Nombre = categoria.Nombre;
    this.Icono = categoria.Icono;
    this.Tablero = categoria.Tablero;

};

Categoria.create = (newCat, result) => {
    sql.query("INSERT INTO categoria SET ?", newCat, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        console.log("created tutorial: ", { id: res.insertId, ...newCat });
        result(null, { id: res.insertId, ...newCat });
    });
};

Categoria.findById = (id, result) => {
    sql.query(`SELECT * FROM categoria WHERE ID = ${id}`, (err, res) => {
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

Categoria.getAll = (title, result) => {
    let query = "SELECT * FROM categoria";

    if (title) {
        query += ` WHERE Nombre LIKE '%${title}%'`;
    }

    sql.query(query, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        console.log("Categorias: ", res);
        result(null, res);
    });
};

Categoria.findByTablero = (tab, result) => {
    sql.query(`SELECT * FROM categoria WHERE Tablero = ${tab}`, (err, res) => {
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

Categoria.updateById = (id, tutorial, result) => {
    sql.query(
        "UPDATE categoria SET title = ?, description = ?, published = ? WHERE id = ?", [tutorial.title, tutorial.description, tutorial.published, id],
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

            console.log("updated Categoria: ", { id: id, ...tutorial });
            result(null, { id: id, ...tutorial });
        }
    );
};

Categoria.remove = (id, result) => {
    sql.query("DELETE FROM categoria WHERE id = ?", id, (err, res) => {
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

        console.log("deleted categiria with id: ", id);
        result(null, res);
    });
};

Categoria.removeAll = result => {
    sql.query("DELETE FROM categoria", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        console.log(`deleted ${res.affectedRows} tutorials`);
        result(null, res);
    });
};

module.exports = Categoria;
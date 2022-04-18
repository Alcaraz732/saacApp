const Categoria = require("../models/categoria.js");

// Create and Save a new Tutorial
exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }

    // Create a Tutorial
    const cat = new Categoria({
        Nombre: req.body.Nombre,
        Icono: req.body.Icono,
        Tablero: req.body.Tablero
    });

    // Save Tutorial in the database
    Categoria.create(cat, (err, data) => {
        if (err)
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Tutorial."
            });
        else res.send(data);
    });
};

// Retrieve all Tutorials from the database (with condition).
exports.findAll = (req, res) => {
    const title = req.query.Nombre;

    Categoria.getAll(title, (err, data) => {
        if (err)
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving tutorials."
            });
        else res.send(data);
    });
};

// Find a single Tutorial by Id
exports.findOne = (req, res) => {
    Categoria.findById(req.params.id, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found Tutorial with id ${req.params.id}.`
                });
            } else {
                res.status(500).send({
                    message: "Error retrieving Tutorial with id " + req.params.id
                });
            }
        } else res.send(data);
    });
};

// find all published Tutorials
exports.findAllByTab = (req, res) => {
    Categoria.findByTablero(req.params.id, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found Tutorial with id ${req.params.id}.`
                });
            } else {
                res.status(500).send({
                    message: "Error retrieving Tutorial with id " + req.params.id
                });
            }
        } else res.send(data);
    });
};

// Update a Tutorial identified by the id in the request
exports.update = (req, res) => {
    // Validate Request
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }

    console.log(req.body);

    Categoria.updateById(
        req.params.id,
        new Categoria(req.body),
        (err, data) => {
            if (err) {
                if (err.kind === "not_found") {
                    res.status(404).send({
                        message: `Not found Tutorial with id ${req.params.id}.`
                    });
                } else {
                    res.status(500).send({
                        message: "Error updating Tutorial with id " + req.params.id
                    });
                }
            } else res.send(data);
        }
    );
};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
    Categoria.remove(req.params.id, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found Tutorial with id ${req.params.id}.`
                });
            } else {
                res.status(500).send({
                    message: "Could not delete Tutorial with id " + req.params.id
                });
            }
        } else res.send({ message: `Tutorial was deleted successfully!` });
    });
};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
    Categoria.removeAll((err, data) => {
        if (err)
            res.status(500).send({
                message: err.message || "Some error occurred while removing all tutorials."
            });
        else res.send({ message: `All Tutorials were deleted successfully!` });
    });
}
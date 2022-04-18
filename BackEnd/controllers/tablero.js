const Tablero = require("../models/tablero.js");

// Create and Save a new Tutorial
exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }

    // Create a Tutorial
    const tab = new Tablero({
        Nombre: req.body.Nombre,
        Color: req.body.Color,
        Usuario: req.body.Usuario
    });

    // Save Tutorial in the database
    Tablero.create(tab, (err, data) => {
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

    Tablero.getAll(title, (err, data) => {
        if (err)
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving tutorials."
            });
        else res.send(data);
    });
};

// Find a single Tutorial by Id
exports.findOne = (req, res) => {
    Tablero.findById(req.params.id, (err, data) => {
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
exports.findAllByUser = (req, res) => {
    Tablero.findByUser(req.params.user, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found Tablero with id ${req.params.user}.`
                });
            } else {
                res.status(500).send({
                    message: "Error retrieving Tablero with id " + req.params.user
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

    Tablero.updateById(
        req.params.id,
        new Tablero(req.body),
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
    Tablero.remove(req.params.id, (err, data) => {
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
    Tablero.removeAll((err, data) => {
        if (err)
            res.status(500).send({
                message: err.message || "Some error occurred while removing all tutorials."
            });
        else res.send({ message: `All Tutorials were deleted successfully!` });
    });
}
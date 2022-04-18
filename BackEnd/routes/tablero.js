module.exports = app => {
    const tableros = require("../controllers/tablero.js");

    var router = require("express").Router();

    // Create a new Tutorial
    router.post("/", tableros.create);

    // Retrieve all Tutorials
    router.get("/", tableros.findAll);

    // Retrieve all published Tutorials
    router.get("/categoria/:user", tableros.findAllByUser);

    // Retrieve a single Tutorial with id
    router.get("/:id", tableros.findOne);

    // Update a Tutorial with id
    router.put("/:id", tableros.update);

    // Delete a Tutorial with id
    router.delete("/:id", tableros.delete);

    // Delete all Tutorials
    router.delete("/", tableros.deleteAll);

    app.use('/tableros', router);
};
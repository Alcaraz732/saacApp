module.exports = app => {
    const botones = require("../controllers/boton.js");

    var router = require("express").Router();

    // Create a new Tutorial
    router.post("/", botones.create);

    // Retrieve all Tutorials
    router.get("/", botones.findAll);

    // Retrieve all published Tutorials
    router.get("/categoria/:id", botones.findAllByCat);

    // Retrieve a single Tutorial with id
    router.get("/:id", botones.findOne);

    // Update a Tutorial with id
    router.put("/:id", botones.update);

    // Delete a Tutorial with id
    router.delete("/:id", botones.delete);

    // Delete all Tutorials
    router.delete("/", botones.deleteAll);

    app.use('/botones', router);
};
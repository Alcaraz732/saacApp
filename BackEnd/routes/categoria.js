/*const { Router } = require('express');
const { getCategorias, getCategoriasByTablero } = require('../controllers/categoria');


const router = Router();

router.get('/', [

], getCategorias);

router.get('/tablero/:id', [

], getCategoriasByTablero);

module.exports = router;*/

module.exports = app => {
    const categorias = require("../controllers/categoria.js");

    var router = require("express").Router();

    // Create a new Tutorial
    router.post("/", categorias.create);

    // Retrieve all Tutorials
    router.get("/", categorias.findAll);


    router.get("/tablero/:id", categorias.findAllByTab);

    // Retrieve a single Tutorial with id
    router.get("/:id", categorias.findOne);

    // Update a Tutorial with id
    router.put("/:id", categorias.update);

    // Delete a Tutorial with id
    router.delete("/:id", categorias.delete);

    // Delete all Tutorials
    router.delete("/", categorias.deleteAll);

    app.use('/categorias', router);
};
const { Router } = require('express');
const { getCategorias, getCategoriasByTablero } = require('../controllers/categoria');


const router = Router();

router.get('/', [

], getCategorias);

router.get('/tablero/:id', [

], getCategoriasByTablero);

module.exports = router;
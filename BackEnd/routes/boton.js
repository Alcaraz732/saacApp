const { Router } = require('express');
const { getBotones, getBotonesByCat } = require('../controllers/boton');


const router = Router();

router.get('/', [

], getBotones);

router.get('/categoria/:id', [

], getBotonesByCat);

module.exports = router;
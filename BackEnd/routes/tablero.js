const { Router } = require('express');
const { getTableros, getTablerosByID } = require('../controllers/tablero');


const router = Router();

router.get('/', [

], getTableros);

router.get('/:id', [

], getTablerosByID);

module.exports = router;
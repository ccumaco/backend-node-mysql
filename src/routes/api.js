const router = require('express').Router();
const apiCategoriasRouter = require('./api/categorias');
const apiComerciosRouter = require('./api/comercios');

router.use('/categorias', apiCategoriasRouter);
router.use('/comercios', apiComerciosRouter);
module.exports = router
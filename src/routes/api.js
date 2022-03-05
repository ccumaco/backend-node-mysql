const router = require('express').Router();
const apiCategoriasRouter = require('./api/categorias');
const apiComerciosRouter = require('./api/comercios');
const apiUsuariosRouter = require('./api/usuarios');

router.use('/categorias', apiCategoriasRouter);
router.use('/comercios', apiComerciosRouter);
router.use('/usuarios', apiUsuariosRouter);
module.exports = router
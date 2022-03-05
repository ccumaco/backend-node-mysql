const router = require('express').Router();
const apiCategoriasRouter = require('./api/categorias');
const apiComerciosRouter = require('./api/comercios');
const apiUsuariosRouter = require('./api/usuarios');
const checkToken = require('./middlewares/chekToken');


router.use('/categorias',checkToken.checkToken, apiCategoriasRouter);
router.use('/comercios',checkToken.checkToken, apiComerciosRouter);
router.use('/usuarios', apiUsuariosRouter);


module.exports = router
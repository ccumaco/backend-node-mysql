const jwt = require('jwt-simple');
const moment = require('moment');
const checkToken = (req, res, next) => {
    if(!req.headers['user-token']){
        return res.json({msg: 'No tienes permisos por token'});
    }

    const userToken = req.headers['user-token'];
    let payload= {}
    try {
        payload = jwt.decode(userToken, 'frase secreta');
    } catch (error) {
        return res.json({msg: 'Token invalido'});
    }

    if (payload.expiredAt < moment().unix()) {
        return res.json({msg: 'Token expirado'});
    }
    req.idusuario  = payload.idusuario;
    next()
}

module.exports = {
    checkToken
}
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const { Usuarios } = require('./../../database');
const moment = require('moment');
const jwt = require('jwt-simple');
const { check, validationResult } = require('express-validator');


router.post('/registro', [
    check('nombre', 'El nombre de usuario es obligatorio').not().isEmpty(),
    check('email', 'El email es obligatorio').isEmail(),
    check('password', 'La contraseña es obligatoria').not().isEmpty(),
], async (req, res) => {
    const errores = validationResult(req);
    if (!errores.isEmpty()) {
        return res.status(422).json({ errores: errores.array() });
    }
    req.body.password = bcrypt.hashSync(req.body.password, 10);
    const usuario = await Usuarios.create(req.body);
    res.json(usuario);
})



router.post('/login', async (req, res) => {
    const user = await Usuarios.findOne({where: {email: req.body.email}})
    if (!user) {
        return res.status(400).json({msg: 'El usuario no existe'})
    }
    const validPass = bcrypt.compareSync(req.body.password, user.password);
    if (validPass) {
        return res.json({success: crearToken(user)});
    }
})


const crearToken = (user)=> {
    const payload = {
        idusuario: user.idusuario,
        createdAt: moment().unix(),
        expiredAt: moment().add(2, 'minutes').unix()
    }
    return jwt.encode(payload, 'frase secreta');
}
module.exports = router;
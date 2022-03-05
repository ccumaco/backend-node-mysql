const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const { Usuarios } = require('./../../database');
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
module.exports = router;
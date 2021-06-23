const express = require('express');
const bcrypt = require('bcrypt');
const Usuario = require('../models/user.model');
const jwt = require('jsonwebtoken');

const app = express();

app.post('/login', (req, res) => {
    const body = req.body;
    Usuario.findOne({ email: body.email }, (err, userLogin) => {
        if (err) {
            return res.status(500).json({
                ok: false,
                err
            });
        }
        if (!userLogin) {
            return res.status(400).json({
                ok: false,
                err: { msg: 'Usuario o contraseña incorrecto!' }
            });
        }
        if (!bcrypt.compareSync(body.pass, userLogin.pass)) {
            return res.status(400).json({
                ok: false,
                err: { msg: 'Usuario o contraseña incorrectos!' }
            });
        }
        const token = jwt.sign({
            usuario: userLogin
        }, process.env.SEED, { expiresIn: process.env.CADUCIDAD_TOKEN });
        return res.json({
            ok: true,
            usuario: userLogin,
            token
        });
    });
});

module.exports = app;
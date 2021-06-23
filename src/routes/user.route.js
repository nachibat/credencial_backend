const express = require('express');
const Usuario = require('../models/user.model');
const bcrypt = require('bcrypt');
const { verificaToken } = require('../middleware/authentication');

const app = express();

// Testeo Principal
app.get('/', (req, res) => {
    return res.json({
        ok: true,
        msg: 'Server OK!'
    });
});

// Listado de usuarios
app.get('/usuarios', (req, res) => {
    Usuario.find().exec((err, usuarios) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            });
        }
        Usuario.countDocuments((err, conteo) => {
            return res.json({
                ok: true,
                cantidad: conteo,
                usuarios
            });
        });
    });
});

// Consulta de usuario por token
app.get('/usuario', verificaToken, (req, res) => {
    return res.json({
        ok: true,
        usuario: req.usuario
    });
});

// Alta de usuario
app.post('/usuario', (req, res) => {
    const body = req.body;
    const usuario = new Usuario({
        legajo: body.legajo,
        email: body.email,
        pass: bcrypt.hashSync(body.pass, 10),
        apellido: body.apellido,
        nombre: body.nombre,
        nro_doc: body.nro_doc,
        estado: body.estado,
        carrera: body.carrera,
        anio: body.anio,
        entrega: body.entrega,
        activo: body.activo
    });
    usuario.save((err, userSaved) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            });
        }
        return res.json({
            ok: true,
            msg: 'Alta de usuario exitosa',
            userSaved
        });
    });
});

module.exports = app;
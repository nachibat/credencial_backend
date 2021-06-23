const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const usuarioSchema = new Schema({
    legajo: {
        type: Number,
        required: [true, 'Legajo required']
    },
    email: {
        type: String,
        required: [true, 'Email required']
    },
    pass: {
        type: String,
        required: [true, 'Password require']
    },
    apellido: {
        type: String,
        required: true
    },
    nombre: {
        type: String,
        required: true
    },
    nro_doc: {
        type: Number,
        required: true
    },
    estado: String,
    carrera: String,
    anio: String,
    entrega: Boolean,
    activo: Boolean
});

usuarioSchema.methods.toJSON = function() {
    let user = this;
    let userObject = user.toObject();
    delete userObject.pass;
    return userObject;
}

module.exports = mongoose.model('Usuario', usuarioSchema);
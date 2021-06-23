const jwt = require('jsonwebtoken');

// Verificar token valido
const verificaToken = (req, res, next) => {
    const token = req.get('token');
    jwt.verify(token, process.env.SEED, (err, decoded) => {
        if (err) {
            return res.status(401).json({
                ok: false,
                err
            });
        }
        req.usuario = decoded.usuario;
        next();
    });
}

module.exports = { verificaToken }
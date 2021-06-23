// Entorno
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

// Puertos
process.env.PORT = process.env.PORT || 4000;
process.env.SECURE_PORT = process.env.SECURE_PORT || 4001;

// Servidor de base de datos
process.env.DB_USER = process.env.DB_USER || 'test';
process.env.DB_PASS = process.env.DB_PASS || 'test';
process.env.DB_NAME = process.env.DB_NAME || 'test_facultad';
process.env.DB_URI = process.env.DB_URI || `mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@localhost`;

// Configuración JsonWebToken
process.env.SEED = process.env.SEED || 'seed-de-desarrollo'
process.env.CADUCIDAD_TOKEN = '7 days';
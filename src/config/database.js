const mongoose = require('mongoose');

mongoose.connect(`${process.env.DB_URI}/${process.env.DB_NAME}?authSource=admin`, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    })
    .then(db => console.log(`Connected to mongodb server: ${db.connection.host}`))
    .catch(err => console.log(err));
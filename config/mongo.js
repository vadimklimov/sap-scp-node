const cfenv = require('cfenv');
const mongoose = require('mongoose');

function configureMongoDB(appEnv) {
    mongoose.connect(appEnv.services.mongodb[0].credentials.uri, {
        useNewUrlParser: true,
        connectTimeoutMS: 5000,
        autoReconnect: true,
        reconnectTries: Number.MAX_VALUE,
        reconnectInterval: 5000
    }).catch(function (err) {
        logger.error('Error when connecting to MongoDB: %s', err.message);
        process.exit(1);
    });
}

module.exports = configureMongoDB;
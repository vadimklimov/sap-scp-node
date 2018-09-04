const cfenv = require('cfenv');
let appEnv = cfenv.getAppEnv();

const express = require('express');
let app = express();

const configMongoDB = require('./config/mongo');
configMongoDB(appEnv);

const configWebServer = require('./config/web');
configWebServer(app);

const routes = require('./routes/routes');
routes(app);

app.listen(appEnv.port, function () {
    console.log('Node.js application started and listening on port %s', appEnv.port)
});
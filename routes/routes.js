const express = require('express');
let router = express.Router();

function routes(app) {
    router.use(require('./sample'));
    router.use(require('./error'));
    router.use(require('./notfound'));

    app.use(router);
}

module.exports = routes;
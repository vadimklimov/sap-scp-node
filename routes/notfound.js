const express = require('express');
let notFoundRoute = express.Router();

notFoundRoute.use((req, res) => {
    res.status(404);
    res.json({
        message: 'Not found',
        method: req.method,
        path: req.path,
        timestamp: new Date().toISOString()
    });
});

module.exports = notFoundRoute;
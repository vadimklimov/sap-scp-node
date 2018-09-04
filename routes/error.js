const express = require('express');
let errorRoute = express.Router();

errorRoute.use((err, req, res, next) => {
    res.status(500);
    res.json({
        message: err.message,
        timestamp: new Date().toISOString()
    });
});

module.exports = errorRoute;
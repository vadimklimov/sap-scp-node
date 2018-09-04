const express = require('express');
const Sample = require('../models/sample');
const sampleController = require('../controllers/sample');
let sampleRoute = express.Router();

sampleRoute.get('/samples', async (req, res, next) => {
    try {
        let sampleCode = req.query.code;
        let samples = await sampleController.getSamplesByCode(sampleCode);

        if (samples.length) {
            res.status(200);
            res.json(samples);
        } else {
            res.status(404);
            res.json({
                message: `Sample ${sampleCode} not found`,
            });
        }
    } catch (err) {
        next(err);
    }
});

module.exports = sampleRoute;
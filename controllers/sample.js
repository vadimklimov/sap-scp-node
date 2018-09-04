const Sample = require('../models/sample');

function getSamplesByCode(code) {
    return new Promise((resolve, reject) => {
        Sample.findByCode(code, (err, samples) => {
            if (err) {
                reject(err);
            }

            resolve(samples);
        });
    });
}

module.exports.getSamplesByCode = getSamplesByCode;
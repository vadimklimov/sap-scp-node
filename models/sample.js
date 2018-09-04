const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let sampleSchema = new Schema({
    id: { type: String, required: true, unique: true },
    code: { type: String },
    description: { type: String }
}, {
    versionKey: false
    });

sampleSchema.static('findByCode', function (code, callback) {
    return this.find({ code: code }, '-_id', callback);
});

let Sample = mongoose.model('Sample', sampleSchema, 'samples');

module.exports = Sample;
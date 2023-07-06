const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const feedback = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    }
});

const Feedback = mongoose.model('Feedback', feedback);
module.exports = { Feedback };
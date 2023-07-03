const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const feedback = new Schema({
    name: {
        type: String,
        required: [true]
    },
    Email: {
        type: String,
        require: [true]
    },
    body: {
        type: String,
        require: [true]
    }
});

const Feedback = mongoose.model('Feedback', feedback);
module.exports = { Feedback };
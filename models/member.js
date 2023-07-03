const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const member = new Schema({
    name: {
        type: String,
        required: [true]
    },
    position: {
        type: String,
        required: [true]
    }
});

const Member = mongoose.model('Member', member);
module.exports = { Member };
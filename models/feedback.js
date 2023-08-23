const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const feedback = new Schema({
    name: {
        type: String,
        required: [true, "name is required"],
        trim: true
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        trim: true,
        lowercase: true,
        match: [/^\S+@\S+\.\S+$/, "Enter valid email address"]
    },
    body: {
        type: String,
        required: [true, "body is required"],
        minLength: [10, "Body must be atleast 10 characters"],
        maxLength: [500, "Body cannot exceed 500 characters"]
    }
});

const Feedback = mongoose.model('Feedback', feedback);
module.exports = { Feedback };
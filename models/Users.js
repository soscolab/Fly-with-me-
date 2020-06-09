const mongoose = require('mongoose');

//Create Schema

const UserSchema = mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    register_date: {
        type: String,
        default: Date.now
    }
});

module.exports = mongoose.model('Users', UserSchema);
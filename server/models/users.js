const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    email_id : {
        type: String,
        required: true
    },
    password : {
        type: String,
        required: true
    },
    first_name: {
        type: String,
        required: true
    },
    last_name:{
        type: String,
        required: false
    },
    age:{
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('User', UserSchema);
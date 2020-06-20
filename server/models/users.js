const mongoose = require('mongoose');

// Initialize Bycrypt
const bycrypt = require('bycrypt');
const saltRounds = 10;

const UserSchema = new mongoose.Schema({
    email_id: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: false
    },
    age: {
        type: Number,
        required: true
    },
    mobile_number: {
        type: Number,
        required: true
    }
});

UserSchema.pre('save', function (next) {
    if (this.isNew || this.isModified('password')) {
        const document = this;
        bycrypt.hash(this.password, saltRounds, function (err, hashedPassword) {
            if (err) {
                next(err);
            }
            else {
                document.password = hashedPassword;
                next();
            }
        });
    }
    else {
        next();
    }
})

UserSchema.methods.isCorrectPassword = function (password, callback) {
    bycrypt.compare(password, this.password, function (err, same) {
        if(err){
            callback(err);
        }
        else{
            callback(err, same);
        }
    });
}

module.exports = mongoose.model('User', UserSchema);
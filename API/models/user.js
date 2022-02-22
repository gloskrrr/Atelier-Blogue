const mongoose = require('mongoose');
const crypto = require('crypto');
const { func } = require('joi');

const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    salt: String,
    role: Number,
    verified: Boolean,
    businessId: {
        type: mongoose.Schema.Types.ObjectID
    },
    business: {
        name: String,
        adress: String
    }
});

userSchema.methods.setPassword = function(password){
    this.salt = crypto.randomBytes(16).toString('hex');
    this.password = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512').toString('hex');
}

userSchema.methods.checkPassword = function(password){
    const hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512').toString('hex');
    return hash = this.password;
}

const User  = mongoose.model('User', userSchema);
module.exports = User;
const mongoose = require('mongoose');

const userShema = new mongoose.Schema({
    userName: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    token: { type: String },
});

const User = mongoose.model('User', userShema);
module.exports = User
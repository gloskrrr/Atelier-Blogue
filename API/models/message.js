const mongoose = require('mongoose');
const crypto = require('crypto');

const messageSchema = new mongoose.Schema({
    title: String,
    text: String,
    creationDate: Date
});

const Message = mongoose.model('Message', messageSchema);
module.exports = Message;
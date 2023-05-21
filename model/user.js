const mongoose = require('mongoose');
const passportLocalmongoose = require('passport-local-mongoose');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    cart: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product'
        }
    ]
})

userSchema.plugin(passportLocalmongoose);

const User = mongoose.model('User', userSchema);

module.exports = User;


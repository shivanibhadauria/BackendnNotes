const { default: mongoose } = require('mongoose');
const moongose = require('mongoose');

moongose.connect('mongodb://127.0.0.1:27017/loginpage');


const userLoginSchema = mongoose.Schema({
    username: String,
    password: String,
    email: String,
    age: Number
})

module.exports = mongoose.model('loginusers', userLoginSchema);
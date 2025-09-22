const { default: mongoose } = require('mongoose');
const moongose = require('mongoose');

moongose.connect('mongodb://localhost:27017/loginpage');


const userLoginSchema = mongoose.Schema({
    username: String,
    password: String,
    email: String,
    age:
})
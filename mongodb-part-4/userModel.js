
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/fruitDB');

const fruitSchema = mongoose.Schema({
    name: String,
    email: String,
    username: String,
})

module.exports = mongoose.model('Fruit', fruitSchema);
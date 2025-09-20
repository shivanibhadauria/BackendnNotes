const express = require('express');
const app = express();
const userModel = require('./userModel');

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/create', async (req, res) => {
    let createduser = await userModel.create({
        name: "Shivani",
        email: "XXXXXXXXXXXXXXXXX",
        username: "Shivani",

    })
    res.send(createduser);
})

app.get('/update', async (req, res) => {
    let updateduser = await userModel.findOneAndUpdate({ username: "Shivani" }, { name: "Shivani Bhadauria 2" })
    res.send(updateduser);



})

app.get('/read', async (req, res) => {
    let user = await userModel.find()
    res.send(user);



})

app.get('/delete', async (req, res) => {
    let deleteduser = await userModel.findOneAndDelete({ username: "Shivani" })
    res.send(deleteduser);



})


app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});
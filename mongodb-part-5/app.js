const express = require('express');
const app = express();
const path = require('path');
const userModel = require('./models/user');
const user = require('./models/user');

app.set('view engine', "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('index');
});

app.get("/allusers", async (req, res) => {
    let allusers = await userModel.find();
    res.render('showUsers', { users: allusers });
})

app.post("/create", async (req, res) => {
    const { name, email, image } = req.body;

    let userModal = await userModel.create({
        name,
        email,
        image
    })

    res.redirect("/allusers");
})

app.post("/delete/:id", async (req, res) => {
    let user = await userModel.findOneAndDelete({ _id: req.params.id });
    res.redirect("/allusers");
})

app.get("/update/:id", async (req, res) => {
    let user = await userModel.findOne({ _id: req.params.id });
    res.render("edit", { user })

})
app.post("/edit/:id", async (req, res) => {
    let { name, email, image } = req.body;

    let user = await userModel.findOneAndUpdate({ _id: req.params.id }, { name, email, image }, { new: true })
    res.redirect("/allusers")
})

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
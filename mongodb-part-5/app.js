const express = require('express');
const app = express();
const path = require('path');
const userModel = require('./models/user');
const user = require('./models/user');
const loginusers = require('./models/userlogin');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cookie = require('cookie-parser');

app.set('view engine', "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// app.get('/', (req, res) => {
//     res.render('index');
// });
// app.get('/login', (req, res) => {
//     res.render('login');
// });
// app.get('/create', (req, res) => {
//     res.render('create');
// });



// app.post("/createuser", (req, res) => {
//     let { username, password, email, age } = req.body;

//     bcrypt.genSalt(10, function (err, salt) {

//         bcrypt.hash(password, salt, async function (err, hash) {
//             let loginuser = await loginusers.create({
//                 username,
//                 password: hash,
//                 email,
//                 age
//             })
//             res.send(loginuser)

//         });
//     });

//     let token = jwt.sign({ email }, "secret");
//     res.cookie("token", token);




// })


// app.post("/loginuser", async (req, res) => {

//     let user = await loginusers.findOne({ username: req.body.username });
//     console.log(req.body)
//     console.log(user);
//     if (!user) {
//         res.send("user not found");
//     }

//     bcrypt.compare(req.body.password, user.password, function (err, result) {
//         if (result) {
//             let token = jwt.sign({ email: user.email }, "secret");
//             res.cookie("token", token);

//             res.send("yes you can login")
//         } else {
//             res.send("you can not log in")
//         }



//     })



// })

// app.get("/logout", (req, res) => {
//     res.cookie("token", "");
//     res.redirect("/login");
// })

// app.get("/allusers", async (req, res) => {
//     let allusers = await userModel.find();
//     res.render('showUsers', { users: allusers });
// })

// app.post("/create", async (req, res) => {
//     const { name, email, image } = req.body;

//     let userModal = await userModel.create({
//         name,
//         email,
//         image
//     })

//     res.redirect("/allusers");
// })

// app.post("/delete/:id", async (req, res) => {
//     let user = await userModel.findOneAndDelete({ _id: req.params.id });
//     res.redirect("/allusers");
// })

// app.get("/update/:id", async (req, res) => {
//     let user = await userModel.findOne({ _id: req.params.id });
//     res.render("edit", { user })

// })
// app.post("/edit/:id", async (req, res) => {
//     let { name, email, image } = req.body;

//     let user = await userModel.findOneAndUpdate({ _id: req.params.id }, { name, email, image }, { new: true })
//     res.redirect("/allusers")
// })



app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
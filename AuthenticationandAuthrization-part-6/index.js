const express = require('express');
const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt');
const app = express();
const jwt = require('jsonwebtoken');
app.use(cookieParser());

app.get('/', (req, res) => {
    console.log(req.cookies);
    res.cookie('name', "shivani"),
        res.send("done")
});

app.get('/hashpassword', (req, res) => {
    // bcrypt.genSalt(10, function (err, salt) {
    //     bcrypt.hash("hohohhohohohoh", salt, function (err, hash) {
    //         console.log("hash", hash);
    //     });
    // });
    // bcrypt.compare("hohohhohohohoh", "$2b$10$T2Xujppl2j.XVaJv6pFJ5usYT5mAJ.AERlPRuoDbLOwXB20MdO6uu", function (err, result) {
    //     console.log(result);
    // });
    // res.send("done")

    let token = jwt.sign({ name: "shivani" }, "secretkey");
    console.log(token);
    res.cookie('token', token);
    res.send("done")

});

app.get('/verify', (req, res) => {
    let data = jwt.verify(req.cookies.token, "secretkey");
    console.log(data);
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
const express = require("express");
const path = require("path");
const fs = require('node:fs');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")))
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  fs.readdir("./tasks" , function(err, tasks) {
    res.render("index", {tasks: tasks});
    console.log(tasks);
  });
});

app.get("/profile/:name", (req, res) => {
  
  res.send(req.params.name)
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
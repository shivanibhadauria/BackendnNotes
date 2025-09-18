const express = require("express");
const path = require("path");
const fs = require('node:fs');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")))
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  fs.readdir("./tasks", function (err, tasks) {
    res.render("index", { tasks: tasks });
    console.log(tasks);
  });
});

app.post("/create", (req, res) => {
  fs.writeFile(`./tasks/${req.body.title.split(' ').join('')}.txt`, req.body.details, function (err) {
    if (err) {
      console.error(err);
      return res.status(500).send('Error creating task');
    }
    console.log(req.body);
    res.redirect('/');
  });
});

app.get("/tasks/:filename", (req, res) => {
  fs.readFile(`./tasks/${req.params.filename}`, "utf-8", function (err, filedata) {
    res.render('show', { filename: req.params.filename, filedata: filedata });
    console.log(filedata);
  })
}
)

app.get("/edit/:filename", (req, res) => {
  res.render('edit', { filename: req.params.filename });
}
)



app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
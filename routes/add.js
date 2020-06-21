const routerAdd = require("express").Router();

const Note = require("../model/Note");
let t = "Enter title";

routerAdd.get("/", (req, res) => {
  res.render("./html/add.ejs", { title: "Title", description: "Description" });
});

routerAdd.post("/", (req, res) => {
  const newNote = {
    title: req.body.title,
    description: req.body.description,
  };
  //console.log(newNote);

  if (newNote.title === "") {
    return res.render("./html/add.ejs", {
      title: "Enter title",
      description: req.body.description,
    });
  }

  if (newNote.description === "") {
    return res.render("./html/add.ejs", {
      title: req.body.title,
      description: "Enter description",
    });
  }

  Note.create(newNote)
    .then((val) => {
      console.log(val);
      res.redirect("/");
    })
    .catch((err) => console.log(err));
});

module.exports = routerAdd;

const routerEdit = require("express").Router();
const Note = require("../model/Note");
const mongoose = require("mongoose");

routerEdit.get("/:id", (req, res) => {
  Note.findById({ _id: req.params.id })
    .then((note) =>
      res.render("./html/edit.ejs", {
        id: note._id,
        title: note.title,
        description: note.description,
      })
    )
    .catch((err) => {
      console.log(err);
      res.status(404).render("./html/error/404.ejs");

    });
});

routerEdit.put("/:id", (req, res) => {
  const updatedNote = {
    title: req.body.title,
    description: req.body.description,
    modified: Date.now(),
  };

  Note.findByIdAndUpdate(req.params.id, updatedNote, {
    useFindAndModify: false,
  })
    .then((val) => {
      console.log(val);
      res.redirect("/");
    })
    .catch((err) => {
      console.log(err);
      res.status(404).render("../html/error/404.ejs");
    });
});

module.exports = routerEdit;

const routerReadMore = require("express").Router();
const Note = require("../model/Note");
const mongoose = require("mongoose");

routerReadMore.get("/:id", (req, res) => {
  //console.log(req.params.id);

  Note.findById({ _id: req.params.id })
    .then((note) => {
      //console.log(note.title);

      res.render("./html/readmore.ejs", {
        id: note._id,
        title: note.title,
        description: note.description,
      });
    })
    .catch((err) => console.log(err));
});

routerReadMore.put("/:id/edit", (req, res) => {
  const updatedNote = {
    title: req.body.title,
    description: req.body.description,
  };
  //console.log(req.params.id);

  //console.log(updatedNote);

  // console.log(mongoose.isValidObjectId(new mongoose.Types.ObjectId(req.params.id)));

  Note.findByIdAndUpdate(req.params.id, updatedNote, {
    useFindAndModify: false,
  })
    .then((val) => {
        console.log(val);
        res.redirect('/');

    }
        )
    .catch((err) => console.log("updateerror" + err));
});

module.exports = routerReadMore;

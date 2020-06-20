const routerIndex = require("express").Router();
const Note = require("../model/Note");

routerIndex.get("/", (req, res) => {
  Note.find({}, (err, allNotes) => {
    console.log(allNotes);
    res.render("./html/landing.ejs", { notes: allNotes });
  }).catch((err) => console.log(err));
});

module.exports = routerIndex;

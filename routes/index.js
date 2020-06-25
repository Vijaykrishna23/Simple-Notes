const routerIndex = require("express").Router();
const Note = require("../model/Note");
const moment = require("moment");

routerIndex.get("/", (req, res) => {
  let notes;

  Note.find({}, (err, allNotes) => {
    notes = allNotes;
    res.render("./html/index.ejs", { notes: notes, formatDate: formatDate , truncate : truncate });
  })
    .sort({ modified: -1 })
    .catch((err) => console.log(err));
});

function formatDate(date) {
  return moment(date).format("DD-MM-YYYY hh:mm A");
}

function truncate(desc) {
  return desc.length > 100 ? desc.substr(0,100) + '...' : desc ;
}


module.exports = routerIndex;

const routerDelete = require("express").Router();
const Note = require("../model/Note");

routerDelete.delete("/:id", (req, res) => {
  console.log("inside delete");

  Note.findByIdAndDelete(req.params.id)
    .then(() => res.redirect('/'))
    .catch((err) => console.log(err));
});

module.exports = routerDelete;

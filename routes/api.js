const routerApi = require("express").Router();

const Note = require("../model/Note");

routerApi.post("/add", (req, res) => {
  const newNote = {
    title: req.body.title,
    description: req.body.description,
  };

  Note.create(newNote)
    .then((val) => res.status(201).send(val))
    .catch((err) => res.send({ error : 'Note note created'}));
});

routerApi.get("/get", (req, res) => {
  Note.find({}, (err, notes) => {
    res.send(notes);
  })
    .sort({ modified: -1 })
    .catch((err) => res.status(404).send({ error : 'Cannot get the notes' }));
});

routerApi.get("/get/:id", (req, res) => {
  Note.findById(req.params.id)
    .then((val) => res.send(val))
    .catch((err) => res.status(404).send({ error : 'Id not found'}));
});

routerApi.put("/edit/:id", (req, res) => {
  const updatedNote = {
    title: req.body.title,
    description: req.body.description,
    modified: Date.now(),
  };

  Note.findByIdAndUpdate(req.params.id, updatedNote, {
    useFindAndModify: false,
  })
    .then((val) => Note.findById(req.params.id))
    .then((val) => res.send(val))
    .catch((err) => res.status(404).send({ error : 'Id not found'}))
    .catch((err) => res.status(404).send({ error : 'Id not found'}));
});

routerApi.delete("/delete/:id", (req, res) => {
  Note.findByIdAndDelete(req.params.id)
    .then((val) => res.send(val))
    .catch((err) => res.sendStatus(204);
});


routerApi.use((req,res,next) => {
    res.sendStatus(404);
    return next();
})

module.exports = routerApi;

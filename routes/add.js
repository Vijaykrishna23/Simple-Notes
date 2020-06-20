const routerAdd = require('express').Router();

const Note = require('../model/Note');


routerAdd.get('/' , (req,res) => {
    res.render('./html/add.ejs');
});

routerAdd.post('/',(req,res) => {
  
   
    const newNote = {
        title : req.body.title,
        description : req.body.description
    };
    console.log(req.body);

    Note.create(newNote);

    res.redirect('/');
    
});

module.exports = routerAdd;

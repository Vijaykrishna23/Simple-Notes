const routerAdd = require('express').Router();



routerAdd.get('/' , (req,res) => {
    res.render('./html/add.ejs');
});

routerAdd.post('/',(req,res) => {
    console.log(req.body);
    res.redirect('/add');
    
});

module.exports = routerAdd;

const routerHome = require('express').Router();

routerHome.get('/' , (req,res) => {
    res.render('./html/landing.ejs');
});



module.exports = routerHome;


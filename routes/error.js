const routerError = require("express").Router();


routerError.get('*', (req,res) => {
    res.render('./html/error/404.ejs');
})


module.exports = routerError;
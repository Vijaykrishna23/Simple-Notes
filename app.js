const express = require("express");
const bodyParser = require("body-parser");
const dotEnv = require('dotenv');
const methodOverride = require('method-override');

const routerIndex = require("./routes/index");
const routerAdd = require("./routes/add");
const routerEdit = require("./routes/edit");
const routerDelete = require("./routes/delete");
const connectDB = require('./config/db');
const routerError = require("./routes/error");
const router = require("./routes");



dotEnv.config({path:'./config/config.env'});

connectDB();

const app = express();
const PORT = process.env.PORT || 3000;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.set("view engine", "ejs");
app.use(express.static("public/lib"));

app.use(methodOverride(function (req, res) {
  if (req.body && typeof req.body === 'object' && '_method' in req.body) {
    var method = req.body._method
    delete req.body._method
    return method
  }
}));


app.use(router);

app.use((req,res,next) => {

  res.status(404).render('./html/error/404.ejs');

  next();
});



app.listen(PORT, () => {
  console.log(`server started at ${PORT}`);
});

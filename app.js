const express = require("express");
const bodyParser = require("body-parser");
const dotEnv = require('dotenv');
const methodOverride = require('method-override');

const routerIndex = require("./routes/index");
const routerAdd = require("./routes/add");
const routerReadMore = require("./routes/readmore");
const connectDB = require('./config/db');


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
    // look in urlencoded POST bodies and delete it
    var method = req.body._method
    delete req.body._method
    return method
  }
}));


app.use("/", routerIndex);
app.use("/add", routerAdd);
app.use("/notes",routerReadMore);

// app.get("/", (req, res) => {
//   res.render("./html/landing.ejs");
// });
// app.get("/add", (req, res) => {
//   // res.send("add a note");
//   res.render("./html/add.ejs");
// });
// app.get("/show", (req, res) => {
//   // res.send("view the note")
//   res.render("./html/show.ejs");
// });
// app.get("/showall", (req, res) => {
//   // res.send("view all notes")
//   res.render("./html/showall.ejs");
// });
// =================================================
// server
// =================================================
app.listen(PORT, () => {
  console.log(`server started at ${PORT}`);
});

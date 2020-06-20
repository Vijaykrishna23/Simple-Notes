const express = require("express");
const bodyParser = require("body-parser");
const dotEnv = require('dotenv');

const routerHome = require("./routes/index");
const routerAdd = require("./routes/add");

dotEnv.config('./config/config');

const app = express();
const PORT = process.env.PORT || 3000;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.set("view engine", "ejs");
app.use(express.static("public"));

app.use("/", routerHome);
app.use("/add", routerAdd);

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

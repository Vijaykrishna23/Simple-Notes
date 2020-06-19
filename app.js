// =================================================
// requiring files
// =================================================

const express = require("express");
const PORT = 3000;
// =================================================
// basic setup
// =================================================

const app = express();
app.set("view engine", "ejs");
app.use(express.static("public"));
// =================================================
// routes
// =================================================

app.get("/", (req, res) => {
  res.render("./html/landing.ejs");
});
app.get("/add", (req, res) => {
  // res.send("add a note");
  res.render("./html/add.ejs");
});
app.get("/show", (req, res) => {
  // res.send("view the note")
  res.render("./html/show.ejs");
});
app.get("/showall", (req, res) => {
  // res.send("view all notes")
  res.render("./html/showall.ejs");
});
// =================================================
// server
// =================================================

const port = process.env.PORT || PORT;

app.listen(port, () => {
  console.log(`server started at ${PORT}`);
});
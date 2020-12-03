const express = require("express");
const bodyparser = require("body-parser");
const nodemailer = require("nodemailer");
const path = require("path");
const exphbs = require("express-handlebars");

const app = express();

// view engine setup
app.engine(
  "handlebars",
  exphbs({ extname: "hbs", defaultLayout: false, layoutsDir: "views/ " })
);
app.set("view engine", "handlebars");

// body parser middleware
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

//static folder
app.use("/public", express.static(path.join(__dirname, "public")));

app.get("/", function (req, res) {
  res.send("Node.js 2 way authnetication");
});

//defining port
const PORT = process.env.PORT || 9002;
app.listen(PORT, () => {
  console.log(`app is live at ${PORT}`);
});

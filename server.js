// Dependencies
var express = require("express");
var exphbs = require("express-handlebars");

// create the express server

var app = express();

// PORT
var PORT = process.env.PORT || 8080;

// serve the static content for the app drom the public folder

app.use(express.static("public"));

// set up express app to handle data parsing

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// set handlebars as view engin
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//import routes and give the server access to them

var routes = require("./controllers/burgers_controller.js");
app.use(routes);

// sync with db

app.listen(PORT, function() {
  console.log("listening on port: " + PORT);
});

// Dependency Set Up
var express = require("express");
var path = require('path');
var bodyParser = require("body-parser");

// Express Set Up, Tell node to init express server
var app = express();

app.use('/assets', express.static('assets'));

// Set up Port
var PORT = process.env.PORT || 4000;

// Body Parser so server can interpret data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Route Set Up, links server to routes which tells server how to respond based on user request
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);
app.post("api/friends", function (req, res) {
    console.log(req.body);
    currRes.push(req.body);
    console.log('Friend Added!');
    res.status(200).send(true);
});

app.get("/api/:viewjson", function(req, res) {

});

// Listener Set Up, starts server

app.listen(PORT, function() {
    console.log("App Listening on PORT: " + PORT);
});
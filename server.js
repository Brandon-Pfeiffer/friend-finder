var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

app.listen(PORT, function() {
	console.log(`🌎 ==> Server now on port ${PORT}!`);
});

app.use(bodyParser.json());

var urlencodedParser = bodyParser.urlencoded({ extended: true });

app.use(bodyParser.text({ type: "text/html" }));

app.use(bodyParser.json({type:"application/*+json"}));

app.use(bodyParser.raw({ type: "application/vnd.custom-type" }));

require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);




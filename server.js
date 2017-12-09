var express = require("express");
var bodyParser = require("bodyParser");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

app.listen(PORT, function() {
		console.log("App listening on PORT: " + PORT);
});

app.use(bodyParser.json());
app.use(bodyParser.urlendcoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:"application/vnd.api+json"}));

require("./app/routing/apiRoutes.js")(app);
require(".app/routing/htmlRoutes.js")(app);



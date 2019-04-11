var express = require("express");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory
app.use(express.static("app/public"));

// Routes
// =============================================================
require("./app/routes/apiRoutes")(app);
require("./app/routes/htmlRoutes")(app);

// Starts the server to begin listening

var db = require("./app/models")
db.sequelize.sync().then(function () {
    app.listen(PORT, function () {
        console.log("App listening on PORT " + PORT);
    });
})

var express = require("express");

// Sets up the Express App
// =============================================================
var app = express();

var bodyParser = require("body-parser");

var passport = require("passport");
var session = require("express-session");

var env = require("dotenv").config();

var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory
app.use(express.static("app/public"));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// For Passport

app.use(
  session({
    secret: "u1pZuuHhAjZLFNAhca7U",
    resave: true,
    saveUninitialized: true
  })
); // session secret

app.use(passport.initialize());

app.use(passport.session()); // persistent login sessions

// Routes
// =============================================================
require("./app/routes/apiRoutes")(app);
require("./app/routes/auth")(app, passport);

require("./app/routes/htmlRoutes")(app);
require("./app/config/passport")(passport);

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});

// Starts the server to begin listening

var db = require("./app/models");
db.sequelize.sync().then(function () {
  app.listen(process.env.PORT || 3000, function () {
    console.log(
      "Express server listening on port %d in %s mode",
      this.address().port,
      app.settings.env
    );
  });
});

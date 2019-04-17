// var authController = require("../controllers/authcontroller.js");
var db = require("../models");

module.exports = function(app, passport) {
  app.get("/signup");

  app.get("/login");

  app.post(
    "/signup",
    passport.authenticate("local-signup", {
      successRedirect: "/",

      failureRedirect: "/signup"
    })
  );

  app.get("/", isLoggedIn);

  app.get("/logout");

  app.get("/api/profile", function(req, res) {
    console.log(req.user);
    var fight = db.Fighter.findAll({ where: { UserId: req.user.id } }).then(
      function(data) {
        res.json(data[0]);
      }
    );
  });

  app.post(
    "/login",
    passport.authenticate("local-signin", {
      successRedirect: "/",

      failureRedirect: "/login"
    })
  );

  function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();

    res.redirect("/signup");
  }
};

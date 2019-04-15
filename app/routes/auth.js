// var authController = require("../controllers/authcontroller.js");

module.exports = function(app, passport) {
  app.get("/signup");

  app.get("/login");

  app.post(
    "/signup",
    passport.authenticate("local-signup", {
      successRedirect: "/dashboard",

      failureRedirect: "/signup"
    })
  );

  app.get("/", isLoggedIn);

  app.get("/logout");

  app.post(
    "/signin",
    passport.authenticate("local-signin", {
      successRedirect: "/dashboard",

      failureRedirect: "/login"
    })
  );

  function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();

    res.redirect("/login");
  }
};

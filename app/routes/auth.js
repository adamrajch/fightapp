// var authController = require("../controllers/authcontroller.js");

module.exports = function(app, passport) {
  app.get("/signup");

  app.get("/signin");

  app.post(
    "/signup",
    passport.authenticate("local-signup", {
      successRedirect: "/dashboard",

      failureRedirect: "/signup"
    })
  );

  app.get("/dashboard", isLoggedIn);

  app.get("/logout");

  app.post(
    "/signin",
    passport.authenticate("local-signin", {
      successRedirect: "/dashboard",

      failureRedirect: "/signin"
    })
  );

  function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();

    res.redirect("/signin");
  }
};

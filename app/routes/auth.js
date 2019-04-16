// var authController = require("../controllers/authcontroller.js");

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

  app.get(
    "/api/profile",
    passport.authenticate("cookie", { session: false }),
    function(req, res) {
      res.json(req.user);
    }
  );

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

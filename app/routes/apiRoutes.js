var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {
  app.get("/api/fighters", function(req, res) {
    db.Fighter.findAll({}).then(function(data) {
      res.json(data);
    });
  });

  app.get("/api/fighters/:name", function(req, res) {
    db.Fighter.findAll({ where: { name: req.params.name } }).then(function(
      data
    ) {
      // if (err) throw err;
      res.json(data);
    });
  });

  app.get("/api/classes/:class", function(req, res) {
    db.Fighter.findAll({ where: { class: req.params.class } }).then(function(
      data
    ) {
      // if (err) throw err;
      res.json(data);
    });
  });

  app.post("/api/users", function(req, res) {
    db.User.create(req.body).then(function(data) {
      res.json(data);
    });
  });

  app.put("/api/update", function(req, res) {
    db.Fighter.update(req.body, {
      where: {
        id: req.body.id
      }
    }).then(function(data) {
      res.json(data);
    });
  });

  app.post("/api/fighters/:type", function(req, res) {
    var yee = req.params.type;
    db.User.findAll({ where: { username: req.body.name } }).then(function(
      data
    ) {
      console.log(data[0].id);
      db.Fighter.create({
        name: req.body.name,
        hp: req.body.hp,
        atk: req.body.atk,
        speed: req.body.speed,
        armor: req.body.armor,
        spAtk: req.body.spAtk,
        resistance: req.body.resistance,
        photo: req.body.photo,
        class: yee,
        UserId: data[0].id //user id here
        // experience: { type: DataTypes.INTEGER, defaultValue: 0 },
        // level: { type: DataTypes.INTEGER, defaultValue: 1 },
        // class: { type: DataTypes.STRING, defaultValue: yee },
        // win: { type: DataTypes.INTEGER, defaultValue: 0 },
        // loss: { type: DataTypes.INTEGER, defaultValue: 0 }
      }).then(function(data) {
        res.redirect("/");
      });
    });
  });
};

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
      res.json(data);
    });
  });

  app.post("/api/fighters", function(req, res) {
    db.Fighter.create(req.body).then(function(data) {
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
};

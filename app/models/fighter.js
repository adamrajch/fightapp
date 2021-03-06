module.exports = function(sequelize, DataTypes) {
  var Fighter = sequelize.define("Fighter", {
    name: { type: DataTypes.STRING, allowNull: false },
    hp: { type: DataTypes.INTEGER, allowNull: false },
    atk: { type: DataTypes.INTEGER, allowNull: false },
    speed: { type: DataTypes.INTEGER, allowNull: false },
    armor: { type: DataTypes.INTEGER, allowNull: false },
    spAtk: { type: DataTypes.INTEGER, allowNull: false },
    resistance: { type: DataTypes.INTEGER, allowNull: false },
    photo: { type: DataTypes.STRING, defaultValue: "../images/default.jpg" },
    experience: { type: DataTypes.INTEGER, defaultValue: 0 },
    level: { type: DataTypes.INTEGER, defaultValue: 1 },
    class: { type: DataTypes.STRING, defaultValue: "Warrior" },
    win: { type: DataTypes.INTEGER, defaultValue: 0 },
    loss: { type: DataTypes.INTEGER, defaultValue: 0 },
    enemy: { type: DataTypes.INTEGER }
  });

  Fighter.associate = function(models) {
    Fighter.belongsTo(models.User, {
      foreignKey: { allowNull: false }
    });
  };

  return Fighter;
};

module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    username: { type: DataTypes.STRING, allowNull: false, unique: true },
    password: { type: DataTypes.STRING, allowNull: false }
    // last_login: { type: sequelize.DATE },
    // status: {
    //   type: sequelize.ENUM("active", "inactive"),
    //   defaultValue: "active"
    // }
  });
  //
  //   User.associate = function(models) {
  // User.hasOne(models.Fighter, {
  //   onDelete: "cascade"
  // });
  //   };
  //
  return User;
};

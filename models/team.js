'use strict';
module.exports = (sequelize, DataTypes) => {
  var team = sequelize.define('team', {
    name: DataTypes.STRING,
    season: DataTypes.STRING,
    team_detail: DataTypes.TEXT
  }, {});
  team.associate = function(models) {
    // associations can be defined here
  };
  return team;
};
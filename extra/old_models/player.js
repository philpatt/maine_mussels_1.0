'use strict';
module.exports = (sequelize, DataTypes) => {
  var player = sequelize.define('player', {
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    jersey_num: DataTypes.INTEGER,
    position: DataTypes.STRING,
    programId: DataTypes.INTEGER,
    teamId: DataTypes.INTEGER
  }, {});
  player.associate = function(models) {
    // associations can be defined here
    models.player.hasMany(models.program);     
    models.player.hasMany(models.team);
    
  };
  return player;
};
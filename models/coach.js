'use strict';
module.exports = (sequelize, DataTypes) => {
  var coach = sequelize.define('coach', {
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    bio: DataTypes.TEXT,
    teamId: DataTypes.INTEGER
  }, {});
  coach.associate = function(models) {
    // associations can be defined here
    models.coach.hasMany(models.team);
    
  };
  return coach;
};
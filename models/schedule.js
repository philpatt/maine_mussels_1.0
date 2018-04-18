'use strict';
module.exports = (sequelize, DataTypes) => {
  var schedule = sequelize.define('schedule', {
    start: DataTypes.DATE,
    end: DataTypes.DATE,
    cost: DataTypes.STRING,
    schedule_detail: DataTypes.TEXT,
    clinicId: DataTypes.INTEGER,
    eventId: DataTypes.INTEGER,
    venueId: DataTypes.INTEGER,
    programId: DataTypes.INTEGER,
    teamId: DataTypes.INTEGER
  }, {});
  schedule.associate = function(models) {
    // associations can be defined here
    models.schedule.hasMany(models.clinic);
    models.schedule.hasMany(models.event);
    models.schedule.hasMany(models.venue);
    models.schedule.hasMany(models.program);
    models.schedule.hasMany(models.team);      
  };
  return schedule;
};
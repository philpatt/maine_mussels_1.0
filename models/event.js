'use strict';
module.exports = (sequelize, DataTypes) => {
  var event = sequelize.define('event', {
    event_title: DataTypes.STRING
  }, {});
  event.associate = function(models) {
    // associations can be defined here
    models.event.hasMany(models.schedule);    
  };
  return event;
};
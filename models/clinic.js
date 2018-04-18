'use strict';
module.exports = (sequelize, DataTypes) => {
  var clinic = sequelize.define('clinic', {
    clinic_title: DataTypes.STRING,
    cost: DataTypes.STRING,
    start: DataTypes.DATE,
    end: DataTypes.DATE,
    clinic_detail: DataTypes.TEXT
  }, {});
  clinic.associate = function(models) {
    // associations can be defined here
    models.clinic.hasMany(models.schedule);
    
  };
  return clinic;
};
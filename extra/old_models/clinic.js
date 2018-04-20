'use strict';
module.exports = (sequelize, DataTypes) => {
  var clinic = sequelize.define('clinic', {
    clinic_title: DataTypes.STRING,
    cost: DataTypes.STRING,
    start_date: DataTypes.DATE,
    end_date: DataTypes.DATE,
    start_time: DataTypes.TIME,
    end_time: DataTypes.TIME,
    clinic_detail: DataTypes.TEXT
  }, {});
  clinic.associate = function(models) {
    // associations can be defined here
    // models.clinic.hasMany(models.schedule);
    
  };
  return clinic;
};
'use strict';
module.exports = (sequelize, DataTypes) => {
  var program = sequelize.define('program', {
    title: DataTypes.STRING,
    cost: DataTypes.STRING,
    start: DataTypes.DATE,
    end: DataTypes.DATE,
    program_detail: DataTypes.TEXT
  }, {});
  program.associate = function(models) {
    // associations can be defined here
  };
  return program;
};
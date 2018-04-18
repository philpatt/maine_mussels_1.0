'use strict';
module.exports = (sequelize, DataTypes) => {
  var venue = sequelize.define('venue', {
    name: DataTypes.STRING,
    address: DataTypes.STRING
  }, {});
  venue.associate = function(models) {
    // associations can be defined here
  };
  return venue;
};
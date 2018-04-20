'use strict';
module.exports = (sequelize, DataTypes) => {
  var owner = sequelize.define('owner', {
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    bio: DataTypes.TEXT
  }, {});
  owner.associate = function(models) {
    // associations can be defined here
  };
  return owner;
};
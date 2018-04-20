'use strict';
module.exports = (sequelize, DataTypes) => {
  var partnership = sequelize.define('partnership', {
    name: DataTypes.STRING,
    website_url: DataTypes.STRING
  }, {});
  partnership.associate = function(models) {
    // associations can be defined here
  };
  return partnership;
};
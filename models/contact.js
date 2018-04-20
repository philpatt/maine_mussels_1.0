'use strict';
module.exports = (sequelize, DataTypes) => {
  var contact = sequelize.define('contact', {
    contact_type: DataTypes.STRING,
    contact_url: DataTypes.STRING,
    contact_number: DataTypes.STRING
  }, {});
  contact.associate = function(models) {
    // associations can be defined here
  };
  return contact;
};
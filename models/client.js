'use strict';
module.exports = function(sequelize, DataTypes) {
  var Client = sequelize.define('Client', {
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING,
    company: DataTypes.STRING,
    owner: DataTypes.STRING,
    userid: DataTypes.STRING,
    userkey: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Client;
};
'use strict';
module.exports = function(sequelize, DataTypes) {
  var Trx = sequelize.define('Trx', {
    type: DataTypes.INTEGER,
    reqid: DataTypes.STRING,
    msisdn: DataTypes.STRING,
    product: DataTypes.STRING,
    userid: DataTypes.STRING,
    balance: DataTypes.INTEGER,
    status: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Trx;
};
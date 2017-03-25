'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('Trxes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      type: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      reqid: {
        type: Sequelize.STRING
      },
      msisdn: {
        type: Sequelize.STRING
      },
      product: {
        type: Sequelize.STRING
      },
      userid: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      balance: {
        type: Sequelize.INTEGER
      },
      status: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        defaultValue: new Date(),
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        defaultValue: new Date(),
        type: Sequelize.DATE
      }
    });
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('Trxes');
  }
};
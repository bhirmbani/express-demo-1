'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('Trxes', [{
      type: 1,
      reqid: null,
      msisdn: null,
      product: null,
      userid: 12345,
      status: 1,
      balance: 10000000
    },{
      type: 1,
      reqid: null,
      msisdn: null,
      product: null,
      userid: 12345,
      status: 2,
      balance: 20000000
    },{
      type: 1,
      reqid: null,
      msisdn: null,
      product: null,
      userid: 12346,
      status: 3,
      balance: 5000000
    },{
      type: 1,
      reqid: null,
      msisdn: null,
      product: null,
      userid: 12346,
      status: 0,
      balance: 10000
    }], {});
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    return queryInterface.bulkDelete('Trxes', null, {});
  }
};

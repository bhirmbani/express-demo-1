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
    return queryInterface.bulkInsert('Products', [{
        "sku": 'XL50',
        "value": 50000
      },
      {
        "sku": 'XL100',
        "value": 100000
      },
      {
        "sku": 'XL200',
        "value": 200000
      },
      {
        "sku": 'IM50',
        "value": 50000
      },
      {
        "sku": 'IM100',
        "value": 100000
      },
      {
        "sku": 'IM200',
        "value": 200000
      },
      {
        "sku": 'SIMPATI50',
        "value": 50000
      },
      {
        "sku": 'SIMPATI100',
        "value": 100000
      },
      {
        "sku": 'SIMPATI200',
        "value": 200000
      }
    ], {});
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    return queryInterface.bulkDelete('Products', null, {});
  }
};

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

    return queryInterface.bulkInsert('Clients', [{
        "username": "kangle59",
        "password": "1234",
        "email": "larsonbyers@centregy.com",
        "company": "Kangle Corp.",
        "owner": "Georgia Koch",
        "userid": 12345,
        "userkey": "12345",
      },
      {
        "username": "optique08",
        "password": "1234",
        "email": "roseannhenderson@venoflex.com",
        "company": "Optique Corp.",
        "owner": "Fields Aguilar",
        "userid": 12346,
        "userkey": "12346",
      },
      {
        "username": "uncorp45",
        "password": "1234",
        "email": "andersoneverett@namebox.com",
        "company": "Uncorp Corp.",
        "owner": "Leah Downs",
        "userid": 12347,
        "userkey": "12347",
      },
      {
        "username": "zeam22",
        "password": "1234",
        "email": "elisehiggins@beadzza.com",
        "company": "Zeam Corp.",
        "owner": "Frances Stephens",
        "userid": 12348,
        "userkey": "12348",
      },
      {
        "username": "lexicondo61",
        "password": "1234",
        "email": "comptonmonroe@xleen.com",
        "company": "Lexicondo Corp.",
        "owner": "Young Robinson",
        "userid": 12349,
        "userkey": "12349",
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
    return queryInterface.bulkDelete('Clients', null, {});
  }
};

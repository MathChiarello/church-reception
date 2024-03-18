'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, _Sequelize) {
    await queryInterface.bulkInsert('Users', [
      {
        fullName: 'John Doe',
        phone: '1234567890',
        email: 'jd@gmail.com',
        function: 'user'
      },
      {
        fullName: 'Teste da Silva',
        phone: '1112345678',
        email: 'tds@gmail.com',
        function: 'user'
      },
      {
        fullName: 'Matheus Chiarello',
        phone: '11962451806',
        email: 'chiarellomatheus@gmail.com',
        function: 'admin'
      }]);
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  }
};

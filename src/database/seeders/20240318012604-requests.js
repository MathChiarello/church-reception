'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Requests', [
      {
        userId: 3,
        description: 'Oração pela mãe que está doente',
        typeRequest: 'Pedido de Oração'
      },
      {
        userId: 3,
        description: 'Agredecimento pela porta de emprego',
        typeRequest: 'Agradecimento'
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Requests', null, {});
  }
};

'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Vistors', [
      {
        userId: 1,
        religion: 'não religioso',
        church: 'Não se aplica',
        description: 'Acompanhando o primo João'
      },
      {
        userId: 2,
        religion: 'Católico',
        church: 'Igreja Matriz',
        description: 'Visita para conhecer a igreja'
      },
      {
        userId: 3,
        religion: 'Cristão',
        church: 'Igreja Batista',
        description: 'Visita para conhecer a igreja'
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};

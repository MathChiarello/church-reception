'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
        field: 'id'
      },
      fullName: {
        type: Sequelize.STRING,
        field: 'full_name',
      },
      phone: {
        type: Sequelize.STRING,
        allowNull: true,
        field: 'phone'
      },
      email: {
        type: Sequelize.STRING,
        allowNull: true,
        field: 'email'
      },
      function: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: 'user',
        field: 'function'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        field: 'created_at'
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        field: 'updated_at'
      }
    })
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.dropTable('Users');
  }
};

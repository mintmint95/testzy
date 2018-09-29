'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    queryInterface.createTable('project', {
      id: {
        type: Sequelize.INTEGER.UNSIGNED,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
      },
      name: {
        field: 'name',
        type: Sequelize.TEXT,
        allowNull: false
      },
      status: {
        field: 'status',
        type: Sequelize.ENUM('active', 'achieve', 'ignored'),
        allowNull: false,
        defaultValue: 'active'
      }
    })
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};

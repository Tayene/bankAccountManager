'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('user', { 
      userid: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      cpf: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      createdate: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      uuid: {
        type: Sequelize.STRING,
        allowNull: false,
      },

    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('user');
  }
};

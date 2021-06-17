'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('banktransfer', { 
      accountid: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      agency: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      amount:{
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      transferid:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      accountdestined:{
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      transactiondate: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      uuid: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      transfertype:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      accounttype:{
        type: Sequelize.STRING,
        allowNull: false,
      }

    });
  },
  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('banktransfer');
  }
};

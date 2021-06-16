'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('account', { 
      accountid: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        references: { model: 'bankdeposit', key: 'deposit', model: 'banktransfer', key: 'transfer' }
      },
      userid: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'user', key: 'userID' }
      },
      balance: {
        type: Sequelize.DOUBLE,
        allowNull: false,
      },
      status: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      name:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      cpf:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      uuid: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      agency:{
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      transactiondate:{
        type: Sequelize.DATE,
        allowNull: false,
      }

    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('account');
  }
};

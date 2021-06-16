'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('bankdeposit', { 
      accountid: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'account', key: 'accountID' }
      },
      accountdestined: {
        type: Sequelize.INTEGER
      },
      amount: {
        type: Sequelize.DOUBLE,
        allowNull: false,
      },
      uuid: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      depositid:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
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
    return queryInterface.dropTable('bankdeposit');
  }
};

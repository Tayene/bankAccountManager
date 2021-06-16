const { Model, DataTypes } = require('sequelize');

class account extends Model {
  static init(sequelize) {
    super.init({
      accountid: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      userid: DataTypes.INTEGER,
      balance: DataTypes.DOUBLE,
      status: DataTypes.STRING,
      name: DataTypes.STRING,
      cpf: DataTypes.STRING,
      uuid: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4
      },
      agency: DataTypes.INTEGER,
      transactiondate: DataTypes.DATE,
    }, {
      sequelize, 
      createdAt: 'transactiondate',
      updatedAt: false
    })
  }

   static associate(models) {
    //this.belongsTo(models.User, { foreignKey: 'userid', as: 'userID' });
    this.hasMany(models.bankDeposit, { foreignKey: 'accountid', as: 'account' })
    //this.hasMany(models.bankTransfer, { foreignKey: 'accountid', as: 'transfer' })
  } 
}

module.exports = account;
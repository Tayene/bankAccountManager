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
    this.hasMany(models.user, { foreignKey: 'userid', as: 'userID' });
    this.hasMany(models.bankdeposit, { foreignKey: 'accountid', as: 'account' })
    this.hasMany(models.banktransfer, { foreignKey: 'accountid', as: 'transfer' })
  } 
}

module.exports = account;
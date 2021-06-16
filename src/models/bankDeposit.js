const { Model, DataTypes } = require('sequelize');

class bankdeposit extends Model {
  static init(sequelize) {
    super.init({
      accountid: DataTypes.INTEGER,
      agency: DataTypes.INTEGER,
      amount: DataTypes.INTEGER,
      depositid: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      accountdestined: DataTypes.INTEGER,
      uuid: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4
      },
      transactiondate: DataTypes.DATE,
    }, {
      sequelize,
      createdAt: 'transactiondate',
      updatedAt: false
    })
  }
}

module.exports = bankdeposit;
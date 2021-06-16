const { Model, DataTypes } = require('sequelize');

class banktransfer extends Model {
  static init(sequelize) {
    super.init({
      accountid: DataTypes.STRING,
      agency: DataTypes.INTEGER,
      amount: DataTypes.INTEGER,
      transferid: {
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
      transfertype: DataTypes.STRING,
      accounttype: DataTypes.STRING
    }, {
      sequelize,
      createdAt: 'transactiondate',
      updatedAt: false
    })
  }

  static associate(models) {
    this.belongsTo(models.account, { foreignKey: 'accountid', as: 'accountUser' });
  }
}

module.exports = banktransfer;
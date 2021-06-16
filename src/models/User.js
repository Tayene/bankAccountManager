const { Model, DataTypes } = require('sequelize');

class user extends Model {
  static init(sequelize) {
    super.init({
      cpf: DataTypes.STRING,
      userid: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      uuid: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4
      },
      name: DataTypes.STRING,
      createdate: DataTypes.DATE,
    }, {
      sequelize
    })
  }
}
  /*  static associate(models) {
    this.hasMany(models.Account, { foreignKey: 'userid', as: 'user' });
  } */
module.exports = user;
const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const User = require('../models/user');
const Account = require('../models/account');
const Transfer = require('../models/bankTransfer');
const Deposit = require('../models/bankDeposit');

const connection = new Sequelize(dbConfig);

User.init(connection);
Account.init(connection);
Transfer.init(connection);
Deposit.init(connection);

//User.associate(connection.models);
//Account.associate(connection.models);
//Transfer.associate(connection.models);
//Deposit.init(connection.models);

module.exports = connection;
const express = require('express');

const UserController = require('./controller/userController');
const AccountController = require('./controller/accountController');
const BankTransferController = require('./controller/bankTransferController');
const DepositBankController = require('./controller/bankDepositController'); 

const routes = express.Router();
 
routes.get('/user/findByPk', UserController.findUser);
routes.get('/user', UserController.findAll);
routes.post('/user', UserController.createUser);
routes.put('/user', UserController.updateUser);
routes.delete('/user', UserController.deleteUser);

routes.get('/user/account/findByPk', AccountController.findAccountByPk);
routes.get('/user/account', AccountController.findAll);
routes.post('/user/account', AccountController.createUserAccount);
routes.put('/user/account', AccountController.updateUserAccount);
routes.delete('/user/account', AccountController.deleteUserAccount);

routes.get('/user/transfer', BankTransferController.findAll);
routes.get('/user/transfer/findByPk', BankTransferController.findTransferByPk);
routes.post('/user/transfer', BankTransferController.createTransfer);

routes.post('/user/deposit', DepositBankController.createDeposit);
routes.get('/user/deposit', DepositBankController.findAll);
routes.get('/user/deposit/findByPk', DepositBankController.findDepositByPk);

module.exports = routes;
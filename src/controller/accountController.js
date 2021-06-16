import Account from '../models/account'
import { Op } from "sequelize"
import User from '../models/user'

module.exports = {
    async findAll(req, res) {
        const findAccount = await Account.findAll();

        return res.json(findAccount);
    },

    async findAccountByPk(req, res) {
        const { accountID } = req.body
        try {
            const findAccount = await Account.findAll({
                where: {
                    accountid: accountID
                }
            })
            return res.json(findAccount);
        } catch (error) {
            throw new error(error)
        }
    },

    async createUserAccount(req, res) {
        const { Name, CPF, ID, balance, status, uuID, Agency, Date } = req.body
        let checkAccount = null
        try {
            const user = await User.findAll({
                where: {
                    name:{
                        [Op.like]: Name
                    },
                    cpf:{
                        [Op.like]: CPF
                    }
                }
            })
            if(user.length == 0){
                return res.status(404).json({ res: 'Usuário não encontrado' });
            }else{
                checkAccount = await Account.findAll({
                    where:{
                        userid: user[0].get('userid')
                    }
                })
            }
            if(checkAccount.length > 0){
                return res.status(401).json({ res: 'Usuário já possui uma conta' });
            } else if(balance < 0){
                return res.status(401).json({ res: 'É necessário inserir um valor na conta!' });
            }else{
                const createAccount = await Account.create({
                    userid: user[0].get('userid'),
                    accountid: ID,
                    name: Name,
                    cpf: CPF,
                    balance: balance,
                    status: status,
                    uuid: uuID,
                    agency: Agency,
                    transactiondate: Date 
                })
                return res.json(createAccount);
            }
        } catch (error) {
            console.log('error', error)
            throw new error(error)
        }
    },

    async updateUserAccount(req, res) {
        const { Name, CPF, userID, balance, status, accountID } = req.body
        try {
            const findAccount = await Account.findAll({
                where:{
                    accountid: accountID,
                    userid: userID
                }
            })
            if(findAccount.length == 0){
                return res.status(404).json({ res: 'Conta não encontrada' });
            }else{
                const update = await Account.update(
                    {
                        name: Name,
                        CPF: CPF,
                        balance: balance,
                        status: status
                    },
                    {
                        where: {
                            userid: userID
                        }
                    }
                )
                return res.status(200).json({ res: 'Usuário atualizado com sucesso' });
            }
        } catch (error) {
            console.log('error', error)
            throw new error(error)
        }
    },

    async deleteUserAccount(req, res) {
        const { userID, accountID } = req.body
        try {
            const findUserAccount = await Account.findAll({
                where: {
                    userid: userID,
                    accountid: accountID
                }
            })
            if (findUserAccount.length == 0) {
                res.status(404).json({ error:'Conta não encontrada' });
            } else {
                const user = await Account.destroy({
                    where:{
                        userid: userID,
                        accountid: accountID
                    }
                })
             return res.status(200).json({ res: 'Conta deletada com sucesso' });
            }
        } catch (error) {
            console.log('error', error)
            throw new error(error)
        }
    }



};
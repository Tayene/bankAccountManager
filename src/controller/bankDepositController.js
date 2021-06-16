import Account from '../models/account'
import bankdeposit from '../models/bankDeposit';
import BankDeposit from '../models/bankDeposit'


module.exports = {
    async findAll(req, res) {
        const findDeposit = await BankDeposit.findAll();

        return res.json(findDeposit);
    },

    async findDepositByPk(req, res) {
        const { depositID } = req.body
        try {
            const findDeposit = await BankDeposit.findAll({
                where: {
                    depositid: depositID
                }
            })
            return res.json(findDeposit);
        } catch (error) {
            throw new error(error)
        }
    },

    async createDeposit(req, res) {
        const { accountID, Agency, Amount, depositID, accountDestined,
            uuID, transactionDate, userID, AgencyDestined } = req.body
        let checkAssignedAccount = null;
        let NewValueAfterTranfer = null;
        let destinedValue = null;

        try {
            const checkSenderAccount = await Account.findAll({
                where:{
                    accountid: accountID,
                    agency: Agency,
                    userid: userID
                }
            })
            if (checkSenderAccount.length < 0) {
                return res.status(404).json({ res: 'Conta não encontrada' });
            } else {
                checkAssignedAccount = await Account.findAll({
                    where: {
                        accountid: accountDestined,
                        agency: AgencyDestined
                    }
                })
            }

            destinedValue = checkAssignedAccount[0].get('balance')
            destinedValue += Amount
            NewValueAfterTranfer = checkSenderAccount[0].get('balance')
            NewValueAfterTranfer -= Amount

            if (checkAssignedAccount < 0) {

                return res.status(404).json({ res: 'Conta não encontrada' });

            } else if (checkSenderAccount[0].get('balance') < Amount) {

                return res.status(401).json({ res: 'Saldo insuficiente' });

            } else if(Amount > 2000){

                return res.status(401).json({ res: 'Não é permitido depositos maiores que R$ 2000,00' });

            } else {
                const creatingDeposit = await BankDeposit.create({
                    accountid: accountID,
                    agency: Agency,
                    amount: Amount,
                    depositid: depositID,
                    accountDestined: accountDestined,
                    transactiondate: transactionDate,
                    uuid: uuID
                })
                const depositing = await Account.update(
                    {
                        transactiondate: transactionDate,
                        balance: destinedValue
                    },
                    {
                        where: {
                            accountid: accountDestined,
                            agency: AgencyDestined
                        }
                    }
                )
                const updatingValueAccount = await Account.update(
                    {
                        transactiondate: transactionDate,
                        balance: NewValueAfterTranfer
                    },
                    {
                        where: {
                            accountid: accountID,
                            agency: Agency
                        }
                    }
                )
                return res.status(200).json({ mensage: 'Deposito efetuado com sucesso' });
            }
        } catch (error) {
            console.log('error', error)
            throw new error(error)
        }
    },
};
import Account from '../models/account'
import BankTransfer from '../models/bankTransfer'


module.exports = {
    async findAll(req, res) {
        const findTransfer = await BankTransfer.findAll();

        return res.json(findTransfer);
    },

    async findTransferByPk(req, res) {
        const { transferID } = req.body
        try {
            const findTransfer = await BankTransfer.findAll({
                where: {
                    transferid: transferID
                }
            })
            return res.json(findTransfer);
        } catch (error) {
            throw new error(error)
        }
    },

    async createTransfer(req, res) {
        const { accountID, Agency, Amount, transferID, Destined,
            uuID, transactionDate, transferType, accountType,
            userID, AgencyDestined } = req.body
        let checkDestined = null;
        let NewValueAfterTranfer = null;
        let destinedValue = null;

        try {
            const checkAccount = await Account.findAll({
                where: {
                    accountid: accountID,
                    agency: Agency,
                    userid: userID
                }
            })
            if (checkAccount.length < 0) {
                return res.status(404).json({ res: 'Conta não encontrada' });
            } else {
                checkDestined = await Account.findAll({
                    where: {
                        accountid: Destined,
                        agency: AgencyDestined
                    }
                })
            }

            destinedValue = checkDestined[0].get('balance')
            destinedValue += Amount
            NewValueAfterTranfer = checkAccount[0].get('balance')
            NewValueAfterTranfer -= Amount

            if (checkDestined < 0) {

                return res.status(404).json({ res: 'Conta não encontrada' });

            } else if (checkAccount[0].get('balance') < Amount) {

                return res.status(401).json({ res: 'Saldo insuficiente' });

            } else {
                const creatingTranfer = await BankTransfer.create({
                    accountid: accountID,
                    agency: Agency,
                    amount: Amount,
                    transferid: transferID,
                    accountDestined: Destined,
                    transactiondate: transactionDate,
                    uuid: uuID,
                    transfertype: transferType,
                    accounttype: accountType
                })
                const tranfering = await Account.update(
                    {
                        transactiondate: transactionDate,
                        balance: destinedValue
                    },
                    {
                        where: {
                            accountid: Destined,
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
                return res.status(200).json({ mensage: 'Transferencia efetuada com sucesso' });
            }
        } catch (error) {
            console.log('error', error)
            throw new error(error)
        }
    },
};
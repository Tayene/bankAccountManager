import { Op } from "sequelize"
import User from '../models/user'

module.exports = {
    async findAll(req, res) {
        const users = await User.findAll();

        return res.json(users);
    },

    async findUser(req, res) {
        const { userID } = req.body
        try {
            const user = await User.findAll({
                where: {
                    userid: userID
                }
            })
            return res.json(user);
        } catch (error) {
            throw new error(error)
        }
    },

    async createUser(req, res) {
        const { Name, CPF, userID, createDate, uuID } = req.body
        try {
            const checkUser = await User.findAll({
                where: {
                    cpf:{
                        [Op.like]: CPF
                    }
                }
            })
            if(checkUser.length > 0){
                return res.status(401).json({ res: 'Usuário já existe!' });
            }else{
                const user = await User.create({
                    name: Name,
                    cpf: CPF,
                    userid: userID,
                    uuid: uuID,
                    createdate: createDate
                })
                return res.json(user);
            }
        } catch (error) {
            console.log('error', error)
            throw new error(error)
        }
    },

    async updateUser(req, res) {
        const { Name, CPF, userID } = req.body
        try {
            const update = await User.update(
                {
                    name: Name,
                    CPF: CPF
                },
                {
                    where: {
                        userid: userID
                    }
                }
            )
            return res.status(200).json({ res: 'Usuário atualizado com sucesso' });
        } catch (error) {
            console.log('error', error)
            throw new error(error)
        }
    },

    async deleteUser(req, res) {
        const { userID } = req.body
        try {
            const findUser = await User.findAll({
                where: {
                    userid: userID
                }
            })
            if (findUser.length == 0) {
                res.status(404).json({ error:'Não encontrado' });
            } else {
                const user = await User.destroy({
                    where:{
                        userid: userID
                    }
                })
             return res.status(200).json({ res: 'Usuário deletado com sucesso' });
            }
        } catch (error) {
            console.log('error', error)
            throw new error(error)
        }
    }



};
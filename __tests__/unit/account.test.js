import AccountController from '../../src/controller/accountController'

describe('createUserAccount', () => {
    it('should create one account per user', async () => {
      const account = await AccountController.createUserAccount()
      //expect(account).toReturn()
    })
})

describe('updateUserAccount', () => {
  it('should update the account', async () => {
    const account = await AccountController.updateUserAccount()
    expect(account).toBe('res: Usuário atualizado com sucesso')
  })
})

describe('deleteUserAccount', () => {
  it('should delete one account at a time', async () => {
    const account = await AccountController.deleteUserAccount()
    expect(account).toBe('res: Usuário deletado com sucesso')
  })
})
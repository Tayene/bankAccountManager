import UserController from '../../src/controller/userController'

describe('createUser', () => {
    it('should create one user at a time', async () => {
      const user = await UserController.createUser()
      expect(user).toBe('res: Usuário atualizado com sucesso')
    })
})

describe('updateUser', () => {
  it('should update one user at a time', async () => {
    const user = await UserController.updateUser()
    expect(user).toBe('res: Usuário atualizado com sucesso')
  })
})

describe('deleteUser', () => {
  it('should delete one user at a time', async () => {
    const user = await UserController.deleteUser()
    expect(user).toBe('res: Usuário deletado com sucesso')
  })
})
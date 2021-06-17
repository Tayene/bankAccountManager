# bankAccountManager
API criada ultilizando a ORM para nodejs SEQUELIZE.
Para iniciar é necessaário criar uma conexão de banco de dados com o dialeto 'Postgresql', utilizando as credenciais que contém no arquivo "database.js" na pasta "config". Após isso é necessário rodas as migrations do sequelize para serem geradas as tabelas, rodando na ordem os comandos a seguir:

  - npx sequelize-cli migration:generate --name migration-user
  - npx sequelize-cli migration:generate --name migration-account
  - npx sequelize-cli migration:generate --name migration-bankdeposit
  - npx sequelize-cli migration:generate --name migration-banktransfer
  - yarn sequelize db:migrate
 
Feito isso, verificar se foram geradas corretamente as tabelas no banco.
Para iniciar o server, basta rodar "yarn dev" no cmd ou qualquer terminal de sua escolha.
Próximo passo, é necessário criar os usuários antes das contas, além disso, foi seguido todas as regras requeridas do desafio.

Para testar as funcionalidades pode ser usado po POSTMAN, a seguir as principais rotas para facilitar, juntamente com jsons de entrada como exemplo.

localhost:3333/user/account --> POST
{
    "Name": "Jose Marques",
    "CPF": "89909898632",
    "balance": 5.00,
    "status": "ativo",
    "Agency": 2222
}

localhost:3333/user/account --> PUT
{
    "Name": "Juliano Silva",
    "CPF": "730.304.480-96",
    "balance": 300.00,
    "status": "ativo",
    "Agency": 3231,
    "userID": 4,
    "accountID": 6
}

USER:
localhost:3333/user --> POST - cria um usuário
{
    "Name": "Juliano Silva",
    "CPF": "730.304.480-96"
}

localhost:3333/user --> PUT - Atualiza os dados do usuário
{
    "Name": "Tayene",
    "userID": 1
}

TRANFER:
localhost:3333/user/transfer --> POST - faz uma transferencia
{
    "accountID": 7,
    "userID": 4,
    "Destined": 8,
    "AgencyDestined": 2222,
    "Agency": 3231,
    "Amount": 100.00,
    "transferType": "TED",
    "accountType": "Corrente"
}

DEPOSIT:
localhost:3333/user/deposit --> POST - faz um deposito
{
    "accountID": 2,
    "userID": 2,
    "accountDestined": 1,
    "AgencyDestined": 2222,
    "Agency": 3333,
    "Amount": 2000
}

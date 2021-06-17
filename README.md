# bankAccountManager
API criada ultilizando a ORM para nodejs SEQUELIZE.
Para iniciar é necessaário criar uma conexão de banco de dados com o dialeto 'Postgresql', ultilizando as credenciais que contém no arquivo "database.js" na pasta "config", após isso é necessário rodas as migrations do sequelize para serem geradas as tabelas, rodando na ordem os comandos a seguir:

  - npx sequelize-cli migration:generate --name migration-user
  - npx sequelize-cli migration:generate --name migration-account
  - npx sequelize-cli migration:generate --name migration-bankdeposit
  - npx sequelize-cli migration:generate --name migration-banktransfer
  - yarn sequelize db:migrate
 
Feito isso, verificar se foram geradas corretamente as tabelas no banco.
Para iniciar o server, basta rodar "yarn dev" no cmd ou qualquer terminal de sua escolha.
Próximo passo, é necessário criar os usuários antes das contas, além disso, foi seguido todas as regras requeridas do desafio.

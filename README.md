# Documentação do Projeto

## Desenvolvimento

### Instalações

-> sequelize
-> sequelize-cli
-> mysql2
-> express
-> nodemon

### Passos

1. Instala as dependências
2. Vai até a pasta src/database e executa o "sequelize-cli init"
3. Cria o arquivo ".sequelizerc" na raiz do projeto
4. Cria o arquivo "config.js" no lugar do arquivo "config.json"
5. Altera a chamada do arquivo "config.js" no "models/index.js"
6. Sobe um container docker do MySQL
7. Executa o comando "env $(cat .env) npx sequelize db:create" para criação do BD
8. Cria as migrations para as tabelas/entidades do BD

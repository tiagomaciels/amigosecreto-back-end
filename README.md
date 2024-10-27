#  [2022] Projeto do início dos meus estudos em desenvolvimento web
## Back-end de sorteio de amigo secreto com envio de e-mail e CRUD completo, utilizando NodeJS, Express, Sequelize e MySQL.

CRUD Completo - Amigo Secreto com Sorteio e Envio de E-mail
---------------------------------------------------
API em NodeJS com Express, Sequelize(ORM) e MySQL.
---------------------------------------------------

Passos realizados no terminal e configurações INICIAIS do projeto:

npm init -y

npm install express

npm install body-parser

*criar pasta api
*criar arquivo index.js
*mudar o caminho do main no package.json "main": "./api/index.js",

npm install --save-dev nodemon

npm install mysql2

npm install sequelize sequelize-cli path

npx sequelize-cli init

---------------------------------------------------
Utilizando o SEQUELIZE:
---------------------------------------------------
Criando o modelo Pessoas
npx sequelize-cli model:create --name Pessoas --attributes nome:string,email:string,nome_amigoSecreto:string

Criando a tabela Pessoas referente ao modelo.
npx sequelize-cli db:migrate

Criando um arquivo Seed, para alimentar o banco com usuários para testes durante o desenvolvimento.
npx sequelize-cli seed:generate --name demo-pessoa

Após alimentar o arquivo de seed gerado, executar o comando para criar os dados na tabela do banco.
npx sequelize-cli db:seed:all

**
Caso tenha rodado o comando de migração antes de fazer alguma alteração importante em algum modelo
 e agora as tabelas do banco não estão como deveriam, através do comando a seguir você pode voltar o banco a um
estado anterior à última alteração.
npx sequelize-cli db:migrate:undo

Para desfazer o Seed:
npx sequelize db:seed:undo
**


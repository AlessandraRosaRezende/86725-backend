const express = require('express');
const dbConnection = require('./db/connection');
const usersRouter = require('./routes/users.router');

const app = express();
app.use(express.json()); // Middleware para analisar JSON
app.use(express.urlencoded({ extended: true })); // Middleware para analisar dados de formulários

dbConnection.then(() => {
  console.log('Conexão com o banco de dados estabelecida com sucesso!');
});

app.get('/', (req, res) => {
  res.send('Bem-vindo à API de Usuários!');
});

app.use('/api/users', usersRouter); // Roteamento para usuários

module.exports = app;
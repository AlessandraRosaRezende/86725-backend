const mongoose = require('mongoose');

const dbConnection = mongoose.connect('mongodb+srv://alessandra:coder@clustercoder.n6nab.mongodb.net/coderhouse?retryWrites=true&w=majority')
.then(() => {
  console.log('Conexão com o banco de dados estabelecida com sucesso!');
}).catch((error) => {
  console.error('Erro ao conectar ao banco de dados:', error);
  process.exit(1); // Encerra o processo se a conexão falhar
});

module.exports = dbConnection;
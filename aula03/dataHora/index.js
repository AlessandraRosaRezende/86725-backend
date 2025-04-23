const fs = require('fs');


const dataHoraAtual = new Date().toString();

const nomeArquivo = 'data-hora.txt';

fs.writeFile(nomeArquivo, dataHoraAtual, (err) => {
  if (err) {
    return console.error('Erro ao escrever o arquivo:', err);
  }

  console.log('Data e hora salvas com sucesso.');


  fs.readFile('data-hora.txt', 'utf8', (err, data) => {
    if (err) {
      return console.error('Erro ao ler o arquivo:', err);
    }

    console.log('Conteúdo do arquivo:');
    console.log(data);
  });
});

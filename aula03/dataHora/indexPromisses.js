const fs = require('fs').promises;

async function main() {
    await fs.writeFile('./exemploPromessa.txt', "Hello, World com promessas!");

    let resultado = await fs.readFile('./exemploPromessa.txt', 'utf8');
    console.log(resultado);
    await fs.appendFile('./exemploPromessa.txt', ' - Adicionando mais texto com promessas!');
    resultado = await fs.readFile('./exemploPromessa.txt', 'utf8');
    console.log(resultado);
    await fs.unlink('./exemploPromessa.txt');
    console.log('Arquivo excluído com sucesso!');
}

main()
    .then(() => {
        console.log('Operações concluídas com sucesso!');
    })
    .catch((error) => {
        console.error('Erro:', error);
    });
const fs = require("fs").promises;


const lerArquivo = async () => {
  try {
    const result = await fs.readFile("./data/usuarios.json", "utf-8");
    const resultParsed = await JSON.parse(result);
    return resultParsed;
  } catch (error) {
    console.log(error);
  }
};

const gravarArquivo = async(data) => {
    try {
      const dataToSave = JSON.stringify(data, null, 2);
      await fs.writeFile('./data/usuarios.json', dataToSave)
    } catch (error) {
      console.log(error);
    }
  }

const main = async () => {
  try {
    const resultado = await lerArquivo();
     console.log(resultado[0].name);
  } catch (error) {
    console.log(error);
  }
};

main();

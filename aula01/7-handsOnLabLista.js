const mostrarLista = (array) => {
  console.log(Array.isArray(array));

  if (!Array.isArray(array)) {
    return "Nao é um array";
  }
  if (array.length === 0) {
  }
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    console.log(element);
  }
  return `Esta lista tem o tamanho de ${array.length}`;
};
//const lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
const lista = 2;
console.log(mostrarLista(lista));

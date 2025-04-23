const geraNumAleatorio = () => {
  const num = Math.floor(Math.random() * 20) + 1;
  return num;
};

const geratLista = (limit) => {

  const array = new Array(limit);
  for (let i = 0; i < limit; i++) {
    array[i] = geraNumAleatorio();
  }
  return array;
};

const contarNumeros = (array) => {
  const numeros = {};
  array.forEach((num) => {

    if (numeros[num]) {
      numeros[num] += 1;
    } else {
      numeros[num] = 1;
    }
  });
  return numeros
};

/*
{
1:3,
2:1,
3:1....
}
*/
const lista = geratLista(10);
const numerosContados = contarNumeros(lista);
console.log(lista)
console.log(numerosContados)

//     index   0  1  2  3  4
/*
const numeros = [1, 2, 3, 4, 5];

const newArr = new Array();

// forEach nao tem retorno
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
numeros.forEach((numero) => newArr.push(numero * 2));

console.log(numeros);

//console.log(newArr);

// map retorna um novo numero
//arrow function
const callback2 = (numero) => numero * 2;
// padrao
function callback(numero) {
  return numero * 2;
}

const novo = numeros.map(callback);

console.log(novo);

const ehPar = numeros.map((numero) => {
  // mod =, se interessa com o resto da divisao

  // 2 % 2 = 0 é par
  // 3 % 2 = 1
  //if (numero % 2 === 0) {
  //   return numero;
  // } else {
  //   return "Não é par";
  // }                     true       false 
  return numero % 2 === 0 ? numero : "Não é par";
});

console.log(ehPar);
*/

// calculadora

const soma = (num1, num2) => num1 + num2;
const subtracao = (num1, num2) => num1 - num2;
const divisao = (num1, num2) => num1 / num2;
const multiplicacao = (num1, num2) => num1 * num2;

const calculadora = (num1, num2, operacao) => {
  console.log(`Estamos executando uma operação de: ${operacao.name}`);
  return operacao(num1, num2);
};

console.log(calculadora(1, 1, soma)); // 2
console.log(calculadora(1, 1, subtracao)); // 0
console.log(calculadora(10, 2, divisao)); // 5
console.log(calculadora(2, 2, multiplicacao)); // 4
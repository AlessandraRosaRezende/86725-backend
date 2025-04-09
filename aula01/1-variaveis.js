const numero = 10;
//console.log(numero)

const nome = "Mari";
//console.log(nome)

let idade = 35;
//console.log(idade)
idade = 36;
//console.log(aidade)

const bool = true; // false
//console.log(bool)

//     index    0             1         2       3         4
const array = ["bicicleta", "carro", "moto", "barco", "patinete"];

//     index    0           1      2   3    4
const array2 = ["bicicleta", true, 3, nome, 6];
// console.log(array2);

const nomeProfessor = "Mari"
const idadeProfessor = 35

const pessoa = {
// key  value
  nome: "Mari",
  idade: 35,
  professor: true,
  tutor: false,
};

// formas de acessar chaves em um objeto
//console.log(pessoa.nome)
//console.log(pessoa["idade"])

const educadores = [
  {
    nome: "Mari",
    idade: 35,
    professor: true, // index 0
    tutor: false,
  },
  {
    nome: "Guilherme",
    idade: 34,
    professor: false, // index 1
    tutor: true,
  }
];

const produtos = [
  {
    titulo: "Bebedouro de Mesa para Garrafão EOS Mineralle Eletrônico Branco EBE03B Bivolt",
    rate: 4.5,
    parcelamento: "R$ 353,63 em 5x de R$ 70,73 sem juros", 
    preco: 353.63, 
    descontoPix: 7,
    precoPix: 318.27
  }
];

console.log(educadores[0]);
console.log(educadores[0].nome)

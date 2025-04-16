// nullish

//const taxaContrato = 0
// usado para sempre deixar um valor default
// 0 = false 1 = true
//const variavelPreenchida = taxaContrato || "Sem Valor";

//console.log(variavelPreenchida);
// aceita zero como valor
//const variavelNullish = taxaContrato ?? "Sem Valor 2";

//console.log(variavelNullish);
/*
// class e private

class Persona {
  #fullname;
  #dataNacimento;
  idade;
  constructor(nome, sobrenome, dataNacimento) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.#fullname = `${this.nome} ${this.sobrenome}`;
    this.#dataNacimento = dataNacimento;
    //this.idade = this.#calculaIdade
  }

  getFullName = () => this.#fullname;
  #metodoPrivado = () => null;
  //  #calculaIdade = () => calcular a idade
  getIdade = () => this.#metodoPrivado;
}

const pessoa1 = new Persona("Mari", "Mohr");
console.log(pessoa1.nome);

console.log(pessoa1.getFullName());

// object Entries, keys, values

const educador = {
// key  value
  nome: "Mari",
  idade: 34,
  professor: true,
  tutor: false,
};

// tranforma em Array
const chavesEValor = Object.entries(educador);
console.log(chavesEValor);
// pega só as chaves
const chaves = Object.keys(educador);
console.log(chaves);
// pega só os valoes
const valores = Object.values(educador);
console.log(valores);
*/

// rest e spread

const educador = {
  nome: "Mari",
  cpf: "542.457.215-00",
  idade: 35,
  professor: true,
  tutor: false,
  compartilharEMail: false,
  tamanho: 181,
};

const enderecoEducador = {
  cidade: "Joinville",
  pais: "Brasil",
};

console.log(educador.nome)

const key = 'nome'
console.log(educador[key])
const { nome, idade, tamanho } = educador;
//console.log(educador);
console.log(nome, idade, tamanho);

const newEducador = {
  nome: educador.nome,
  // cpf: educador.cpf,
  idade: educador.idade,
  professor: educador.professor,
  tutor: educador.tutor,
  compartilharEMail: educador.compartilharEMail,
  tamanho: educador.tamanho,
  cidade: enderecoEducador.cidade,
  pais: enderecoEducador.pais
}
//console.log(newEducador)
// spread
let educadorCompleto =  {...educador , ...enderecoEducador};
//console.log("AAAA",educadorCompleto);

// rest
const { cpf,  ...educardorSemCpf } = educadorCompleto;

///const cpf = educadorCompleto.cpf

 console.log("cpf", cpf);
 //552.***.***.***-50
 console.log("rest", educardorSemCpf);
 console.log("educador", educadorCompleto);



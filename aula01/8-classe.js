class Pessoa {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade
  }

  static especie = "humano";

  saudar = () => {
    console.log(`Olá, meu nome é ${this.nome}, prazer em te conhecer!`);
  };

  getEspecie() {
    console.log(`Eu sou um ${Pessoa.especie}`);
  }
}

let pessoa1 = new Pessoa("Mariana", 35);
let pessoa2 = new Pessoa("Guilherme", 22);


pessoa1.saudar();
pessoa2.saudar();
pessoa1.getEspecie();
pessoa2.getEspecie();

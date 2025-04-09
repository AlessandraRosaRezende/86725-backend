class Contador {
    #contagem = 0;
    constructor(nome) {
        this.nome = nome;
        this.contagem = 0;
    }

    static countGlobal = 0;

    getResponsavel() {
        console.log(`Olá, meu nome é ${this.nome}, eu sou o responsavel pelo contador!`);
    }
    contar(){
        this.#contagem++;
        Contador.countGlobal++;
        console.log(`Contagem: ${this.#contagem}`);
        console.log(`Contagem Global: ${Contador.countGlobal}`);
    }
    getContadorIndividual(){
        console.log(`Contador Individual: ${this.#contagem}`);
    }
    getContadorGlobal(){
        console.log(`Contador Global: ${Contador.countGlobal}`);
    }
}

let contador1 = new Contador("Mariana");

contador1.getResponsavel();

contador1.contar();
contador1.contar();
contador1.getContadorIndividual();
contador1.getContadorGlobal();


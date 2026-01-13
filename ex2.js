class pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    falar() {
        console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
    }   
}
const pessoa1 = new pessoa("Andre", 25);
pessoa1.falar();
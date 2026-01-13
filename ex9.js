class Telefone {
    constructor(modelo, numero) {
        this.modelo = modelo;
        this.numero = numero;
    }
    ligar() {
        console.log(`Ligando para ${this.numero}.`);
    }
}

const meuTelefone = new Telefone("Samsung", "(21)99999-9999");
meuTelefone.ligar();
class Caneta {
    constructor(cor, tamanho) {
        this.cor = cor;
        this.tamanho = tamanho;
    }
    escrever() {
        console.log(`Escrevendo com a caneta ${this.cor}.`);
    }
}

const minhaCaneta = new Caneta("azul", "0.7mm");
minhaCaneta.escrever();
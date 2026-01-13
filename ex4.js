class Produto {
    constructor(nome, preco) {
        this.nome = nome;
        this.preco = preco;
    }
    mostrarPreco() {
        console.log(`O preço do produto ${this.nome} é R$${this.preco}.`);
    }
}

const produto1 = new Produto("Notebook", 3500);
produto1.mostrarPreco();

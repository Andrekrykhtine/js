
class Pessoa{
    constructor(nome, idade){
        this.nome=nome;
        this.idade=idade;
    }
    falar(){
        console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
    }
}
const pessoa1=new Pessoa("Ana", 25);
pessoa1.falar();

class carro{
    constructor(marca,ano)
    {
        this.marca=marca;
        this.ano=ano;
    }
dirigir(){
    console.log(`O carro da marca ${this.marca} do ano ${this.ano} está dirigindo.`);
}
}
//teste 1




class carro{
    constructor(marca,ano)
    {
        this.marca=marca;
        this.ano=ano;
    }
dirigir(){
    console.log(`O carro está dirigindo`);
}
}

const meuCarro = new carro("Toyota", 2020);
meuCarro.dirigir();

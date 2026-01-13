class Emprego {
    constructor(cargo, salario) {
        this.cargo = cargo;
        this.salario = salario;
    }
    aumentarSalario(valor) {
        this.salario += valor;
        console.log(`Novo salário: R$${this.salario}`);
    }
}

const empregado1 = new Emprego("Desenvolvedor", 3000);
empregado1.aumentarSalario(1000);
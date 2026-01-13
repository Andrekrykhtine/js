class contaBancaria {
    constructor(saldoInicial) {
        this.saldo = saldoInicial;
    }

    depositar(valor) {
        this.saldo += valor;
        console.log(`Depósito de R$${valor} realizado. Saldo atual: R$${this.saldo}`);
    }
}
    const conta1 = new contaBancaria(1000);
    conta1.depositar(500);
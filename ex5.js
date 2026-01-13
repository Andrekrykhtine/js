class Aluno {
    constructor(nome, notaFinal) {
        this.nome = nome;
        this.notaFinal = notaFinal;
    }
    mostrarNota() {
        console.log(`A nota final do aluno ${this.nome} é ${this.notaFinal}.`);
    }
}

const aluno1 = new Aluno("Hamilton", 2.5);
aluno1.mostrarNota();
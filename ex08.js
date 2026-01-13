class LivroDeBiblioteca {
    constructor(titulo, disponivel) {
        this.titulo = titulo;
        this.disponivel = disponivel;
    }
    emprestar() {
        this.disponivel = false;
        console.log("Livro emprestado.");
    }
}

const livro1 = new LivroDeBiblioteca("O caçador de pipas ", true);
livro1.emprestar();
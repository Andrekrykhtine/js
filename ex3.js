class livro {
    constructor(titulo, autor){
        this.titulo=titulo;
        this.autor=autor;
    }
    ler(){
        console.log(`Estou lendo ${this.titulo} do autor ${this.autor}.`); 
    }
}
const livro1=new livro("O Alquimista", "Paulo Coelho");
livro1.ler();
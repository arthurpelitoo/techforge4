"use strict";
class Livro {
    constructor(titulo, autor, paginas, lido) {
        this.titulo = titulo;
        this.autor = autor;
        this.paginas = paginas;
        this.lido = lido;
    }
    livroFoiLido() {
        console.log("O livro " + this.titulo + " foi lido");
        return this.lido = true;
    }
    getLido() {
        console.log("O livro " + this.titulo + " foi lido? " + this.lido);
        return this.lido;
    }
}
let livro = new Livro("Diário de um Banana: As Regras de Rodrick!", "Jeff Kinney", 223, false);
livro.getLido();
livro.livroFoiLido();
livro.getLido();

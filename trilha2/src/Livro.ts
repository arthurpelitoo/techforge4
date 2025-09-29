class Livro{
    private titulo: string;
    private autor: string;
    private paginas: number;
    private lido: boolean;

    constructor(titulo: string, autor: string, paginas: number, lido: boolean){
        this.titulo = titulo;
        this.autor = autor;
        this.paginas = paginas;
        this.lido = lido;
    }

    livroFoiLido():boolean {
        console.log("O livro " + this.titulo + " foi lido");
        return this.lido = true;
    }

    getLido():boolean {
        console.log("O livro " + this.titulo + " foi lido? " + this.lido);
        return this.lido;
    }
}

let livro = new Livro("Diário de um Banana: As Regras de Rodrick!", "Jeff Kinney", 	223, false);
livro.getLido();
livro.livroFoiLido();
livro.getLido();
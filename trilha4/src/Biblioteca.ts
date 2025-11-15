import { Livro } from "./Livro";

export class Biblioteca{
    constructor(private livros: Livro[]){

    }

    buscarLivrosDisponiveis(): Livro[]{

        // O metodo filter cria um novo array (livrosDisponiveis) apenas com os livros
        //  onde a propriedade 'disponivel' é true
        const livrosDisponiveis = this.livros.filter((livro) => {
            return livro.disponivel === true;
        });

        // retorna o novo array
        return livrosDisponiveis;
    }
}
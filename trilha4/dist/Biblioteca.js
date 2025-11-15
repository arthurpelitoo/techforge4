"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Biblioteca = void 0;
class Biblioteca {
    constructor(livros) {
        this.livros = livros;
    }
    buscarLivrosDisponiveis() {
        // O metodo filter cria um novo array (livrosDisponiveis) apenas com os livros
        //  onde a propriedade 'disponivel' é true
        const livrosDisponiveis = this.livros.filter((livro) => {
            return livro.disponivel === true;
        });
        // retorna o novo array
        return livrosDisponiveis;
    }
}
exports.Biblioteca = Biblioteca;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BibliotecaGestao = void 0;
class BibliotecaGestao {
    constructor(livros) {
        this.livros = livros;
    }
    filtrarPorGenero(genero) {
        // O metodo filter cria um novo array (livrosGenero) apenas com os livros
        //  onde a propriedade que corresponde vai ser inserida no novo array
        const livrosGenero = this.livros.filter((livro) => {
            return livro.genero === genero;
        });
        // retorna o novo array
        return livrosGenero;
    }
    buscarPorAutor(autor) {
        // O metodo filter cria um novo array (livrosAutor) apenas com os livros
        //  onde a propriedade que corresponde vai ser inserida no novo array
        const livrosAutor = this.livros.filter((livro) => {
            return livro.autor === autor;
        });
        // retorna o novo array
        return livrosAutor;
    }
    obterLivrosDisponiveisOrdenados() {
        // O metodo filter cria um novo array (livrosDisponiveis) apenas com os livros
        //  onde a propriedade que corresponde vai ser inserida no novo array
        const livrosDisponiveis = this.livros.filter((livro) => {
            return livro.disponivel === true;
        });
        //nao sabia que dava pra fazer isso, mas ao colocar [...], você cria
        //uma copia rasa do array filtrado antes de ordenar.
        //ao usar livrosDisponiveis.sort() sozinho, mudaria o array original, então criar a copia 
        //garantiria que os arrays permançam inalterados
        const livrosOrdenados = [...livrosDisponiveis].sort((a, b) => {
            return a.titulo.localeCompare(b.titulo);
        });
        // retorna o novo array
        return livrosOrdenados;
    }
}
exports.BibliotecaGestao = BibliotecaGestao;

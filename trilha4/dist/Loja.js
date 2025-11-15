"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Loja = void 0;
class Loja {
    constructor(produtos) {
        this.produtos = produtos;
    }
    buscarProdutoPorCodigo(codigo) {
        // O método 'find' percorre o array do produtos
        // e retorna o primeiro p que satisfazer a condição.
        const produtoEncontrado = this.produtos.find((produto) => {
            return produto.codigo === codigo;
        });
        // se não encontrar, entrega undefined.
        return produtoEncontrado;
    }
}
exports.Loja = Loja;

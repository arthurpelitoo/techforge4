"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemLoja = void 0;
class ItemLoja {
    /**
     * não sabia mas ele ja faz isso automatico:
     * O TypeScript cria automaticamente as propriedades da classe
     * e atribui os valores do construtor.
     * @param id
     * @param nome
     * @param preco
     */
    constructor(id, nome, preco) {
        this.id = id;
        this.nome = nome;
        this.preco = preco;
        // Então acaba nem precisando de código interno, pois a declaração 'public' faz a atribuição (this.id = id)
    }
}
exports.ItemLoja = ItemLoja;

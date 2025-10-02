"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Item = void 0;
class Item {
    constructor(nome, preco, quantidade) {
        this.nome = nome;
        this.preco = preco;
        this.quantidade = quantidade;
    }
    getNome() {
        return this.nome;
    }
    getPreco() {
        return this.preco;
    }
    getQuantidade() {
        return this.quantidade;
    }
}
exports.Item = Item;

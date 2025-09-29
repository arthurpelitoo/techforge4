"use strict";
class Produto {
    constructor(nome, preco, quantidade) {
        this.nome = nome;
        this.preco = preco;
        this.quantidade = quantidade;
    }
    valorTotalEmEstoque() {
        let valorTotal = this.preco * this.quantidade;
        console.log("o valor atual total em estoque : " + valorTotal);
        return valorTotal;
    }
    getPreco() {
        console.log("preço atual do " + this.nome + " : " + this.preco);
        return this.preco;
    }
    getQuantidade() {
        console.log("quantidade atual do " + this.nome + " : " + this.quantidade);
        return this.quantidade;
    }
}
let produto = new Produto("Café Pilão", 38.25, 2);
produto.getPreco();
produto.getQuantidade();
produto.valorTotalEmEstoque();

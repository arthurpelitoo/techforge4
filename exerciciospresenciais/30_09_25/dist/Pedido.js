"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pedido = void 0;
class Pedido {
    constructor(numeroPedido) {
        this.itens = [];
        this.total = 0;
        this.numeroPedido = numeroPedido;
    }
    adicionarItem(item) {
        this.itens.push(item);
        this.total += (item.getPreco() * item.getQuantidade());
    }
    exibirResumoCompra() {
        console.log(`Itens comprados: ${this.itens.map(item => `${item.getQuantidade()}  ${item.getNome()} ${item.getPreco()}`)} ${this.total}`);
    }
}
exports.Pedido = Pedido;
//Exemplo join
const exemploArray = ['a', 'b', 'c'];
console.log(exemploArray.join(';'));
//Exemplo map
const exemploArrayObjeto = [{ nome: 'Carlos' }, { nome: 'Palmeiras' }, { nome: 'Thais Carla' }];
// exemploArrayObjeto = ['Juscelino', 'Pedro', 'Thiago']
const arrayMapeado = exemploArrayObjeto.map(function (linha) {
    return linha.nome;
});
console.log(exemploArrayObjeto.map(linha => linha.nome).join(', '));

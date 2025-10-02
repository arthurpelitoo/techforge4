"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PagamentoCartao = void 0;
const Pagamento_1 = require("./Pagamento");
class PagamentoCartao extends Pagamento_1.Pagamento {
    constructor(numeroCartao) {
        super();
        this.numeroCartao = numeroCartao;
    }
    processar() {
        let numeroCartaoContent = this.numeroCartao.toString();
        if (numeroCartaoContent.length === 16) {
            console.log("Cartão Valido.");
            console.log("Processando pagamento.");
            console.log("Pagamento processado.");
        }
        else {
            console.log("Cartão Invalido.");
        }
    }
}
exports.PagamentoCartao = PagamentoCartao;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PagamentoBoleto = void 0;
const Pagamento_1 = require("./Pagamento");
class PagamentoBoleto extends Pagamento_1.Pagamento {
    processar() {
        let codigoBoletasso = Math.floor(Math.random() * 1000000000000000);
        console.log("Boleto gerado: " + codigoBoletasso);
    }
}
exports.PagamentoBoleto = PagamentoBoleto;

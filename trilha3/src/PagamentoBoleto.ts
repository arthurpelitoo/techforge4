import { Pagamento } from "./Pagamento";

export class PagamentoBoleto extends Pagamento{

    processar() {
        let codigoBoletasso = Math.floor(Math.random() * 1000000000000000);

        console.log("Boleto gerado: " + codigoBoletasso);
    }
}
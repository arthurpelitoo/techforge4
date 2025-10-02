import { Pagamento } from "./Pagamento";

export class PagamentoCartao extends Pagamento{
    private numeroCartao: number;

    constructor(numeroCartao: number){
        super();
        this.numeroCartao = numeroCartao;
    }

    processar() {
        let numeroCartaoContent : string = this.numeroCartao.toString();
        if(numeroCartaoContent.length === 16){
            console.log("Cartão Valido.");
            console.log("Processando pagamento.");
            console.log("Pagamento processado.");
        } else{
            console.log("Cartão Invalido.");
        }
    }
}
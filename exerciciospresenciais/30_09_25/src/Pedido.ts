import { Item } from "./Item";

export class Pedido{
    private numeroPedido: number;
    private itens: Item[];
    private total: number;

    constructor(numeroPedido: number){
        this.itens = [];
        this.total = 0;
        this.numeroPedido = numeroPedido;
    }

    public adicionarItem(item: Item):void {
        this.itens.push(item);
        this.total += (item.getPreco() * item.getQuantidade());
    }

    public exibirResumoCompra():void {
        console.log(`Itens comprados: ${this.itens.map(item => `${item.getQuantidade()}  ${item.getNome()} ${item.getPreco()}`)} Total: ${this.total}`);
    }

}

    //Exemplo join
    const exemploArray = ['a', 'b', 'c'];

    console.log(exemploArray.join(';'));

    //Exemplo map
    const exemploArrayObjeto = [{nome: 'Carlos'}, {nome: 'Palmeiras'}, {nome: 'Thais Carla'}];
    // exemploArrayObjeto = ['Juscelino', 'Pedro', 'Thiago']

    const arrayMapeado = exemploArrayObjeto.map(function(linha) {
        return linha.nome;
    });

    console.log(exemploArrayObjeto.map(linha => linha.nome).join(', '));
class Produto{
    private nome: string;
    private preco: number;
    private quantidade: number;

    constructor(nome: string, preco: number, quantidade: number){
        this.nome = nome;
        this.preco = preco;
        this.quantidade = quantidade;
    }

    valorTotalEmEstoque(): number{
        let valorTotal = this.preco * this.quantidade;
        console.log("o valor atual total em estoque : " + valorTotal);
        return valorTotal;
    }

    getPreco():number {
        console.log("preço atual do " + this.nome + " : " + this.preco);
        return this.preco;
    }

    getQuantidade(): number {
        console.log("quantidade atual do " + this.nome + " : " + this.quantidade);
        return this.quantidade;
    }

}

let produto = new Produto("Café Pilão", 38.25, 2);
produto.getPreco();
produto.getQuantidade();
produto.valorTotalEmEstoque();
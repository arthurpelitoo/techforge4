export class Item{
    private nome: string;
    private preco: number;
    private quantidade: number;

    constructor(nome: string, preco: number, quantidade: number){
        this.nome = nome;
        this.preco = preco;
        this.quantidade = quantidade;
    }

    public getNome(): string{
        return this.nome;
    }

    public getPreco(): number{
        return this.preco;
    }

    public getQuantidade(): number {
        return this.quantidade;
    }
}
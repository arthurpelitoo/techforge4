import { ProdutoLoja } from "./ProdutoLoja";


export class Loja {


    constructor(private produtos: ProdutoLoja[]){

    }

    buscarProdutoPorCodigo(codigo: number): ProdutoLoja | undefined
    {
        // O método 'find' percorre o array do produtos
        // e retorna o primeiro p que satisfazer a condição.
        const produtoEncontrado = this.produtos.find((produto) => {
            return produto.codigo === codigo;
        })

        // se não encontrar, entrega undefined.
        return produtoEncontrado;
    }
}
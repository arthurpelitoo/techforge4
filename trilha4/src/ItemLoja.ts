import { Produto } from "./Produto";

export class ItemLoja implements Produto{
    /**
     * não sabia mas ele ja faz isso automatico:
     * O TypeScript cria automaticamente as propriedades da classe
     * e atribui os valores do construtor.
     * @param id 
     * @param nome 
     * @param preco 
     */

    constructor(public id: number, public nome: string, public preco: number){
        // Então acaba nem precisando de código interno, pois a declaração 'public' faz a atribuição (this.id = id)
    }
}
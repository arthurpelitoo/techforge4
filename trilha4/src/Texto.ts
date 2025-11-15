import { Documento } from "./Documento";

export class Texto implements Documento{

    constructor(public titulo: string, public conteudo: string){
    }

    exibir(): string {
        return "Título: [" + this.titulo + "], Conteúdo: [" + this.conteudo + "].";
    }
}
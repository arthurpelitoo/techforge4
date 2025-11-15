import { Documento } from "./Documento"
import { Email } from "./Email"

export class Pessoa{
    private nome: string
    private email: Email
    private documento: Documento
    
    constructor(nome: string, email: Email, documento: Documento){
        this.nome = nome
        this.email = email
        this.documento = documento
    }

}
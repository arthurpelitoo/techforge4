import { Documento } from "./Documento"
import { Email } from "./Email"
import { Pessoa } from "./Pessoa"

export class Usuario extends Pessoa{
    private usuario: string
    private senha: string

    constructor(nome: string, email: Email, documento: Documento, usuario: string, senha: string){
        super(nome, email, documento)
        this.usuario = usuario
        this.senha = senha
    }
    validarSenha(senha: string): boolean {
        return this.senha === senha;
    }
}

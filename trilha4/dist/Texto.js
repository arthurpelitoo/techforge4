"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Texto = void 0;
class Texto {
    constructor(titulo, conteudo) {
        this.titulo = titulo;
        this.conteudo = conteudo;
    }
    exibir() {
        return "Título: [" + this.titulo + "], Conteúdo: [" + this.conteudo + "].";
    }
}
exports.Texto = Texto;

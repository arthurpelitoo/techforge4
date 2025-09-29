"use strict";
class Agenda {
    constructor(compromissos) {
        this.compromissos = compromissos;
    }
    adicionarCompromissos(compromisso) {
        console.log("Compromisso adicionado: " + compromisso);
        this.compromissos.push(compromisso);
    }
    listarCompromissos() {
        console.log("Todos os compromissos: " + this.compromissos);
        return this.compromissos;
    }
}
let agenda = new Agenda([]);
agenda.listarCompromissos();
agenda.adicionarCompromissos("ver o corinthias perdendo pro mengão.");
agenda.listarCompromissos();

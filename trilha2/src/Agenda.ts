class Agenda{
    private compromissos: Array<string>;

    constructor(compromissos: Array<string>){
        this.compromissos = compromissos;
    }

    adicionarCompromissos(compromisso: string):void{
        console.log("Compromisso adicionado: " + compromisso);
        this.compromissos.push(compromisso);
    }

    listarCompromissos(): Array<string> {
        console.log("Todos os compromissos: " + this.compromissos);
        return this.compromissos;
    }
}

let agenda = new Agenda([]);

agenda.listarCompromissos();
agenda.adicionarCompromissos("ver o corinthias perdendo pro mengão.");
agenda.listarCompromissos();
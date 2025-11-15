class Cachorro{
    private nome: string;
    private idade: number;
    private raca: string;

    constructor(nome: string, idade: number, raca: string){
        this.nome = nome;
        this.idade = idade;
        this.raca = raca;
    }

    getIdadeDeCachorro(): number {
        return this.idade * 7;
    }

    getNome(): string {
        return this.nome;
    }

}

    const cachorro: Cachorro = new Cachorro('Bob Marllon', 3, 'Vira Lata');

    console.log(`Nosso amigo ${cachorro.getNome()} tem ${cachorro.getIdadeDeCachorro()} em idade de Humano`);
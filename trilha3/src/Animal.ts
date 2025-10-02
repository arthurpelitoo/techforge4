export class Animal{
    private energia: number;

    constructor(){
        this.energia = 10;
    }

    comer(): void{
        this.energia += 5;
        console.log("Comendo... energia aumentada.");
    }

    statusEnergia(): void{
        console.log(`Energia atual: ${this.energia}`);
    }

    protected getEnergia(): number{
        return this.energia;
    }

    protected setEnergia(valor: number): void{
        this.energia = valor;
    }
}
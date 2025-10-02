import { Animal } from "./Animal";

export class Passaro extends Animal{
    constructor(){
        super();
    }

    comer():void{
        console.log("Passaro está comendo..");
        this.setEnergia(this.getEnergia() + 8);
        console.log("O passaro comeu e recuperou energia.");
        this.statusEnergia();
    }
}
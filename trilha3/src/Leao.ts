import { Animal } from "./Animal";

export class Leao extends Animal{

    constructor(){
        super();
    }
        comer():void {
            console.log("Leão está comendo..");
            this.setEnergia(this.getEnergia() - 3);

            this.statusEnergia();
            this.setEnergia(this.getEnergia() + 8);
            console.log("O leão comeu e recuperou energia.");
            this.statusEnergia();
        }
}
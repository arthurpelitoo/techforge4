"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Passaro = void 0;
const Animal_1 = require("./Animal");
class Passaro extends Animal_1.Animal {
    constructor() {
        super();
    }
    comer() {
        console.log("Passaro está comendo..");
        this.setEnergia(this.getEnergia() + 8);
        console.log("O passaro comeu e recuperou energia.");
        this.statusEnergia();
    }
}
exports.Passaro = Passaro;

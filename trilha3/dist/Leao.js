"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Leao = void 0;
const Animal_1 = require("./Animal");
class Leao extends Animal_1.Animal {
    constructor() {
        super();
    }
    comer() {
        console.log("Leão está comendo..");
        this.setEnergia(this.getEnergia() - 3);
        this.statusEnergia();
        this.setEnergia(this.getEnergia() + 8);
        console.log("O leão comeu e recuperou energia.");
        this.statusEnergia();
    }
}
exports.Leao = Leao;

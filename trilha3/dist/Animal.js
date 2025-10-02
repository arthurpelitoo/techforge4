"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Animal = void 0;
class Animal {
    constructor() {
        this.energia = 10;
    }
    comer() {
        this.energia += 5;
        console.log("Comendo... energia aumentada.");
    }
    statusEnergia() {
        console.log(`Energia atual: ${this.energia}`);
    }
    getEnergia() {
        return this.energia;
    }
    setEnergia(valor) {
        this.energia = valor;
    }
}
exports.Animal = Animal;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Veiculo_1 = require("./Veiculo");
class Carro extends Veiculo_1.Veiculo {
    mover() {
        console.log("O carro está dirigindo");
    }
}
let carro = new Carro();
carro.mover();

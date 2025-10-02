"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Veiculo_1 = require("./Veiculo");
class Bicicleta extends Veiculo_1.Veiculo {
    mover() {
        console.log("A bicicleta está pedalando");
    }
}
let bicicleta = new Bicicleta();
bicicleta.mover();

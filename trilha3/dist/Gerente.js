"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Gerente = void 0;
const Funcionario_1 = require("./Funcionario");
class Gerente extends Funcionario_1.Funcionario {
    calcularBonus() {
        return this.getSalario() * 0.10;
    }
}
exports.Gerente = Gerente;

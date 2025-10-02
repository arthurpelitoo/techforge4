"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Operador = void 0;
const Funcionario_1 = require("./Funcionario");
class Operador extends Funcionario_1.Funcionario {
    calcularBonus() {
        return this.getSalario() * 0.05;
    }
}
exports.Operador = Operador;

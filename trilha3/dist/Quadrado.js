"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Quadrado = void 0;
const FiguraGeometrica_1 = require("./FiguraGeometrica");
class Quadrado extends FiguraGeometrica_1.FiguraGeometrica {
    constructor(lado) {
        super();
        this.lado = lado;
    }
    calcularArea() {
        return this.lado * this.lado;
    }
}
exports.Quadrado = Quadrado;

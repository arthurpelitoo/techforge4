"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Circulo = void 0;
const FiguraGeometrica_1 = require("./FiguraGeometrica");
class Circulo extends FiguraGeometrica_1.FiguraGeometrica {
    constructor(raio) {
        super();
        this.raio = raio;
    }
    calcularArea() {
        return Math.PI * this.raio * this.raio;
    }
}
exports.Circulo = Circulo;

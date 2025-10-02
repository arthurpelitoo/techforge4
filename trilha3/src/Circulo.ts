import { FiguraGeometrica } from "./FiguraGeometrica";

export class Circulo extends FiguraGeometrica{
    private raio: number;

    constructor(raio: number){
        super();
        this.raio = raio;
    }

    public calcularArea():number{
        return Math.PI * this.raio * this.raio;
    } 
}
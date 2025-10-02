import { FiguraGeometrica } from "./FiguraGeometrica";

export class Quadrado extends FiguraGeometrica{
    private lado: number;

    constructor(lado: number){
        super();
        this.lado = lado;
    }

    public calcularArea():number{
        return this.lado * this.lado;
    } 
}
import { FiguraGeometrica } from "./FiguraGeometrica";

export class Triangulo extends FiguraGeometrica{
    private base: number;
    private altura: number;

    constructor(base: number, altura: number){
        super();
        this.base = base;
        this.altura = altura;
    }

    public calcularArea():number{
        return (this.base * this.altura) / 2;
    } 
}
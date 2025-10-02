import { Funcionario } from "./Funcionario";

export class Operador extends Funcionario{

    calcularBonus(): number{
        return this.getSalario() * 0.05;
    }
}
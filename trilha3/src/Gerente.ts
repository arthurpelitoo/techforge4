import { Funcionario } from "./Funcionario";

export class Gerente extends Funcionario{

    calcularBonus(): number{
        return this.getSalario() * 0.10;
    }
}
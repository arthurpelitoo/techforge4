import { Veiculo } from "./Veiculo";

class Carro extends Veiculo{

    mover(): void {
        console.log("O carro está dirigindo");
    }
}

let carro = new Carro();
carro.mover();
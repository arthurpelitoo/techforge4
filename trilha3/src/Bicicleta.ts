import { Veiculo } from "./Veiculo";

class Bicicleta extends Veiculo{

    mover(): void {
        console.log("A bicicleta está pedalando");
    }
}

let bicicleta = new Bicicleta();
bicicleta.mover();
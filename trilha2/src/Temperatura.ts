class Temperatura{
    private valor: number; // Valor em Celsius

    constructor(valor: number){
        this.valor = valor;
    }

    toFahrenheit(): number {
        let Fahrenheit = ((this.valor * 9/5) + 32);
        console.log("O valor para Fahrenheit convertido fica: " + Fahrenheit + " Fº");
        return Fahrenheit;
    }

    toKelvin(): number {
        let Kelvin = (this.valor + 273.15);
        console.log("O valor para Kelvin convertido fica: " + Kelvin + " Kº");
        return Kelvin;
    }
}

let temperatura = new Temperatura(25);

temperatura.toKelvin();
temperatura.toFahrenheit();
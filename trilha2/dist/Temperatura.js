"use strict";
class Temperatura {
    constructor(valor) {
        this.valor = valor;
    }
    toFahrenheit() {
        let Fahrenheit = ((this.valor * 9 / 5) + 32);
        console.log("O valor para Fahrenheit convertido fica: " + Fahrenheit + " Fº");
        return Fahrenheit;
    }
    toKelvin() {
        let Kelvin = (this.valor + 273.15);
        console.log("O valor para Kelvin convertido fica: " + Kelvin + " Kº");
        return Kelvin;
    }
}
let temperatura = new Temperatura(25);
temperatura.toKelvin();
temperatura.toFahrenheit();

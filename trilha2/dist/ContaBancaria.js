"use strict";
class ContaBancaria {
    constructor(titular, saldo) {
        this.titular = titular;
        this.saldo = saldo;
    }
    depositarDinheiro(saldoADepositar) {
        console.log("Depositando: " + saldoADepositar);
        return this.saldo += saldoADepositar;
    }
    sacarDinheiro(saldoASacar) {
        if (saldoASacar <= this.saldo) {
            console.log("Sacando: " + saldoASacar);
            this.saldo -= saldoASacar;
        }
        else {
            console.log("Operação cancelada. Dinheiro insufiente para saque.");
        }
    }
    getSaldo() {
        console.log("Saldo: " + this.saldo);
        return this.saldo;
    }
    getTitular() {
        console.log("Titular: " + this.titular);
        return this.titular;
    }
}
;
let Conta = new ContaBancaria("Carlos", 2500);
Conta.getSaldo();
Conta.depositarDinheiro(500);
Conta.sacarDinheiro(1000);
Conta.getSaldo();
Conta.getTitular();

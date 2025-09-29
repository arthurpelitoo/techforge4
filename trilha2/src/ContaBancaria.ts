
class ContaBancaria{
    private titular: string;
    private saldo: number;

    constructor(titular: string, saldo: number){
        this.titular = titular;
        this.saldo = saldo;
    }

    depositarDinheiro(saldoADepositar: number):number{
        console.log("Depositando: " + saldoADepositar);
        return this.saldo += saldoADepositar;
    }

    sacarDinheiro(saldoASacar: number):void{
        if(saldoASacar <= this.saldo){
            console.log("Sacando: " + saldoASacar);
            this.saldo -= saldoASacar;
        } else{
            console.log("Operação cancelada. Dinheiro insufiente para saque.");
        }
    }

    getSaldo():number{
        console.log("Saldo: " + this.saldo);
        return this.saldo;
    }

    getTitular():string{
        console.log("Titular: " + this.titular);
        return this.titular;
    }
};

let Conta = new ContaBancaria("Carlos", 2500);

Conta.getSaldo();
Conta.depositarDinheiro(500);
Conta.sacarDinheiro(1000);
Conta.getSaldo();
Conta.getTitular();
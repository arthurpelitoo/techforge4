// import { Funcionario } from "./Funcionario";
// import { Gerente } from "./Gerente";
// import { Operador } from "./Operador";

// function calcularSalarioComBonus(Func: Funcionario[]){
//     Func.forEach(funcionario => {
//         let salarioBonus = funcionario.getSalario() + funcionario.calcularBonus();
//         console.log(`${funcionario.getNome()} - Salario com Bonus: ${salarioBonus.toFixed(2)}`);
//     });
// }

// const funcionarios : Funcionario[] = [
//     new Gerente("Jose", 8000),
//     new Operador("Carlos", 3500)
// ]

// calcularSalarioComBonus(funcionarios);




// import { Leao } from "./Leao";
// import { Passaro } from "./Passaro";

// let leao : Leao = new Leao();
// let passaro : Passaro = new Passaro();

// passaro.comer();
// leao.comer();




// import { Pagamento } from "./Pagamento";
// import { PagamentoBoleto } from "./PagamentoBoleto";
// import { PagamentoCartao } from "./PagamentoCartao";

// let pagamentoCartao : PagamentoCartao = new PagamentoCartao(4124525623245236);
// let pagamentoBoletao : PagamentoBoleto = new PagamentoBoleto();

// function pagar(pag: Pagamento){
//     pag.processar();
// }

// pagar(pagamentoCartao);
// pagar(pagamentoBoletao);




// import { Circulo } from "./Circulo";
// import { FiguraGeometrica } from "./FiguraGeometrica";
// import { Quadrado } from "./Quadrado";
// import { Triangulo } from "./Triangulo";

// function imprimirAreas(figuras: FiguraGeometrica[]): void
// {
//     figuras.forEach((figura, index) => {
//         console.log(`Area da Figura ${index + 1} : ${figura.calcularArea()}`);
//     });
// }

// const figuras : FiguraGeometrica[] = [
//     new Circulo(2),
//     new Quadrado(2),
//     new Triangulo(4, 2)
// ]

// imprimirAreas(figuras);
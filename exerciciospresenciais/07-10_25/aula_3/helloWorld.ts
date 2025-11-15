const texto: string = 'Hello, World!';
const numero: number = 5;
const maioridade: boolean = true;
const frutas: string[] = ['Jaca', 'Fruda do Conde', 'Cajá'];

function soma(numero1: number, numero2: number): number{
    return numero1 + numero2;
}

console.log(`A soma dos números ${numero} e ${numero} é ${soma(numero, numero)}`);

type Endereco = {
    rua: string,
    numero: number,
    cidade: string
}

function obterInformacoesEndereco(endereco: Endereco): string{
    return `${endereco.rua}, ${endereco.numero} - ${endereco.cidade}`;
}

console.log(obterInformacoesEndereco({
    rua: 'São Josafat',
    numero: 55,
    cidade: 'Campo Mourão'
}));

function filtrarNumeros(numeros: any[]): number[] {
   return numeros.filter(numero => typeof numero === 'number');
}

console.log(`Filtrar numeros: ${filtrarNumeros(['Marcio', 15, true, 16])}`);
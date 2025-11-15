import { Documento } from "./Documento";

export class Cpf implements Documento{

    validar(documento: string): boolean {

        // 1. Verifica se o input é nulo ou indefinido
        if (!documento) {
            return false;
        }

        // 2. Remove caracteres não numéricos (pontos, traços)
        const cpfLimpo = documento.replace(/[^\d]/g, '');

        // 3. Verifica se tem 11 dígitos
        if (cpfLimpo.length !== 11) {
            return false;
        }

        // 4. Verifica se todos os dígitos são iguais (ex: "111.111.111-11")
        // Isso é uma regra de invalidação conhecida.
        if (/^(\d)\1{10}$/.test(cpfLimpo)) {
            return false;
        }

        // 5. Separa o corpo (9 dígitos) e os dígitos verificadores (2 dígitos)
        const corpo = cpfLimpo.substring(0, 9);
        const dv1Input = parseInt(cpfLimpo.charAt(9));
        const dv2Input = parseInt(cpfLimpo.charAt(10));

        /**
         * Função interna para calcular um dígito verificador (Módulo 11)
         * @param base String com os dígitos base para o cálculo
         * @param pesoInicial O peso inicial da multiplicação (10 para DV1, 11 para DV2)
         */
        const calcularDigito = (base: string, pesoInicial: number): number => {
            let soma = 0;
            for (let i = 0; i < base.length; i++) {
            soma += parseInt(base.charAt(i)) * (pesoInicial - i);
            }
            const resto = soma % 11;
            // Se o resto for 0 ou 1, o dígito é 0. Senão, é 11 - resto.
            return (resto < 2) ? 0 : (11 - resto);
        }

        // 6. Calcula o primeiro dígito verificador (DV1)
        const dv1Calculado = calcularDigito(corpo, 10);

        // 7. Compara o DV1 calculado com o DV1 do input
        if (dv1Calculado !== dv1Input) {
            return false;
        }

        // 8. Calcula o segundo dígito verificador (DV2)
        // Note que a base agora inclui o DV1 (correto, vindo do input)
        const dv2Calculado = calcularDigito(corpo + dv1Input, 11);

        // 9. Compara o DV2 calculado com o DV2 do input
        return dv2Calculado === dv2Input;
    }
}
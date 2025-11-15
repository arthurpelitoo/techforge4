import { Documento } from "./Documento";

export class Cnpj implements Documento{
    validar(documento: string): boolean {

        // 1. Verifica se o input é nulo ou indefinido
        if (!documento) {
            return false;
        }

        // 2. Remove caracteres não numéricos (pontos, traços, barras)
        const cnpjLimpo = documento.replace(/[^\d]/g, '');

        // 3. Verifica se tem 14 dígitos
        if (cnpjLimpo.length !== 14) {
            return false;
        }

        // 4. Verifica se todos os dígitos são iguais (ex: "11.111.111/1111-11")
        // Esta é uma regra de invalidação conhecida.
        if (/^(\d)\1{13}$/.test(cnpjLimpo)) {
            return false;
        }

        /**
         * Função interna para calcular um dígito verificador (Módulo 11)
         * @param base String com os dígitos base para o cálculo
         * @param pesos Array de números com os pesos da multiplicação
         */
        const calcularDigito = (base: string, pesos: number[]): number => {
            let soma = 0;
            // O CNPJ usa uma sequência de pesos que "reseta" no meio
            for (let i = 0; i < base.length; i++) {
            soma += parseInt(base.charAt(i)) * pesos[i];
            }
            const resto = soma % 11;
            // Se o resto for 0 ou 1, o dígito é 0. Senão, é 11 - resto.
            return (resto < 2) ? 0 : (11 - resto);
        };

        // 5. Define os pesos para o cálculo de cada DV
        // Pesos para o DV1 (base de 12 dígitos)
        const pesosDV1 = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
        // Pesos para o DV2 (base de 13 dígitos)
        const pesosDV2 = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];

        // 6. Separa o corpo (12 dígitos) e os dígitos verificadores (2 dígitos)
        const corpo = cnpjLimpo.substring(0, 12);
        const dv1Input = parseInt(cnpjLimpo.charAt(12));
        const dv2Input = parseInt(cnpjLimpo.charAt(13));

        // 7. Calcula o primeiro dígito verificador (DV1)
        const dv1Calculado = calcularDigito(corpo, pesosDV1);

        // 8. Compara o DV1 calculado com o DV1 do input
        if (dv1Calculado !== dv1Input) {
            return false;
        }

        // 9. Calcula o segundo dígito verificador (DV2)
        // A base agora inclui o DV1 (correto, vindo do input)
        const dv2Calculado = calcularDigito(corpo + dv1Input, pesosDV2);

        // 10. Compara o DV2 calculado com o DV2 do input
        return dv2Calculado === dv2Input;
    }
}
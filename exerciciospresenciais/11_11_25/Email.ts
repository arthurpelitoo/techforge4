export class Email{
    private email: string

    constructor(email: string){
        this.email = email;
    }

    validarEmail(email: string): boolean {
        // 1. Garante que o e-mail não é nulo, indefinido ou uma string vazia.
        if (!this.email) {
            return false;
        }

        // 2. Expressão Regular (Regex) para validação de e-mail.
        // Esta é uma Regex comum e pragmática, não 100% compatível com RFC 5322,
        // mas cobre 99% dos casos de uso reais.
        const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

        // 3. Testa a string contra a Regex.
        // O método .test() retorna true se houver uma correspondência, e false caso contrário.
        return emailRegex.test(this.email);
    }

    enviarEmail(mensagem: string): void {
        console.log(`Email para ${this.email}: ${mensagem}`)
    }
}
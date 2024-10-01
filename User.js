export default class User {
    #nome;
    #sobrenome;
    #email;
    #nascimento;
    #role;
    #ativo;
    
    constructor(nome, sobrenome, email, nascimento, role, ativo = true) {
        this.#nome = nome;
        this.#sobrenome = sobrenome;
        this.#email = email;
        this.#nascimento = nascimento;
        this.#role = role || 'Estudante';
        this.#ativo = ativo;
    }

    get nome() {
        return `${this.#nome} ${this.sobrenome}`;
    }

    get sobrenome() {
        return this.#sobrenome;
    }

    get email() {
        return this.#email;
    }
    get nascimento() {
        return this.#nascimento;
    }
    get role() {
        return this.#role;
    }
    get ativo() {
        return this.#ativo;
    }

    set nome(novoNome) {
        if (novoNome === '') {
            throw new Error('Novo nome inválido');
        }
        let [nome, ...sobrenome] = novoNome.split(' ');
        sobrenome = sobrenome.join(' ');
        this.#nome = nome;
        this.#sobrenome = sobrenome;
    }
    set email(novoEmail) {
        this.#email = novoEmail;
    }
    set nascimento(novoNascimento) {
        this.#nascimento = novoNascimento;
    }
    set role(novoRole) {
        this.#role = novoRole;
    }
    set ativo(novoAtivo) {
        this.#ativo = novoAtivo;
    }

//Métodos Estáticos não dependem de instâncias ou de construtores
    static exibirInfoStatic (nome, email){
        return `Dados Static\nNome: ${nome}\nEmail: ${email}\n`
    }

    exibirInfo() {
        return `Dados ${this.role}:\nNome: ${this.nome}\n`;
        /*         if (this.role === 'Estudante') {
            return `Dados ${this.role}:\nNome: ${this.nome}\n`;
        } else if (this.role === 'Admin') {
            return `Dados ${this.role}:\nNome: ${this.nome}\nRole: ${this.role}\n`;
        } else if (this.role === 'Docente') {
            return `Dados ${this.role}:\nNome: ${this.nome}\nEmail: ${this.email}\nRole: ${this.role}\n`;
        } */
    }
}

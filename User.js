export default class User {
    constructor(nome, email, nascimento, role, ativo = true) {
        this.nome = nome;
        this.email = email;
        this.nascimento = nascimento;
        this.role = role || 'Estudante';
        this.ativo = ativo;
    }

    exibirInfo() {
        return `${this.nome}, ${this.email}`;
    }
}

const usuario = new User('rodrigo', 'r@r.com', '2024-08-13');

console.log(usuario);
console.log(usuario.exibirInfo());

//console.log(User.prototype.isPrototypeOf(usuario));

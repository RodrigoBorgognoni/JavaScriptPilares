import User from './User.js';

export default class Admin extends User {
    constructor(nome, sobrenome, email, nascimento, role = 'Admin', ativo = true) {
        //super classe de admin (User)
        super(nome, sobrenome, email, nascimento, role, ativo);
    }

    criarCurso(nomeCurso, qtdVagas) {
        return `Curso ${nomeCurso} criado com ${qtdVagas} vagas.`;
    }

    exibirInfo() {
        const infos = super.exibirInfo();
        return `${infos}Email: ${this.email}\n`;
    }
}

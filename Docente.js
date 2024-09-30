import User from './User.js';

export default class Docente extends User {
    constructor(nome, sobrenome, email, nascimento, role = 'Docente', ativo = true) {
        //super classe de admin (User)
        super(nome, sobrenome, email, nascimento, role, ativo);
    }
    aprovarEstudante(nomeEstudante, curso) {
        return `Estudante ${nomeEstudante} passou no curso ${curso}.\nResponsável ${this.nome}`;
    }
}

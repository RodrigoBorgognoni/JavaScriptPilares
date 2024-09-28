import User from './User.js';

class Docente extends User {
    constructor(nome, email, nascimento, role = 'Docente', ativo = true) {
        //super classe de admin (User)
        super(nome, email, nascimento, role, ativo);
    }
    aprovarEstudante(nomeEstudante, curso) {
        return `Estudante ${nomeEstudante} passou no curso ${curso}.\nResponsável ${this.nome}`;
    }
}

const novoDocente = new Docente('Ana', 'a@a.com', '1996-01-01');
console.log(novoDocente.aprovarEstudante('Rogério', 'JavaScript'));

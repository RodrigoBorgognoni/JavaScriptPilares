import User from './User.js';

class Admin extends User {
    constructor(nome, email, nascimento, role = 'Admin', ativo = true) {
        //super classe de admin (User)
        super(nome, email, nascimento, role, ativo);
    }
    criarCurso(nomeCurso, qtdVagas) {
        return `Curso ${nomeCurso} criado com ${qtdVagas} vagas.`;
    }
}

const novoAdmin = new Admin('Rodrigo', 'r@r.com', '2024-01-01');
console.log(novoAdmin);
console.log(novoAdmin.criarCurso('Adm', '20'));

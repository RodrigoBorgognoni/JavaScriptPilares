import User from './User.js';

export default class Admin extends User{
    constructor(nome, email, nascimento, role = 'Admin', ativo = true){
        //super classe de admin (User)
        super(nome, email, nascimento, role, ativo)
    }
}

const novoAdmin = new Admin('Rodrigo','r@r.com','2024-01-01');
console.log(novoAdmin);
console.log(novoAdmin.exibirInfo());
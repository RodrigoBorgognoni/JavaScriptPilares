import User from './User.js';
import Docente from './Docente.js';
import Admin from './Admin.js';

const novoUser = new User('Juliana', 'Souza', 'j@j.com', '2021-01-01');
novoUser.nome = 'Juliana Silva Souza';
console.log(novoUser.exibirInfo());


const novoAdmin = new Admin('Rodrigo', 'Borgognoni', 'r@b.com', '2021-01-01');
console.log(novoAdmin.exibirInfo());

const novoDocente = new Docente('John', 'Doe', 'j@d.com', '2021-01-01');
console.log(novoDocente.exibirInfo());

const dadoStatic = User.exibirInfoStatic('Will', 'w@c.com')
console.log(dadoStatic);
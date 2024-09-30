import User from './User.js';
import Docente from './Docente.js';
import Admin from './Admin.js';

const novoUser = new User('Juliana', 'Souza', 'j@j.com', '2021-01-01');
console.log(novoUser.nome);
novoUser.nome = 'Juliana Silva Souza';
console.log(novoUser.nome);
console.log(novoUser.sobrenome);


const novoDocente = new Docente('Rodrigo', 'Souza', 'j@j.com', '2021-01-01');
console.log(novoDocente.aprovarEstudante('Marcos', 'admin'));
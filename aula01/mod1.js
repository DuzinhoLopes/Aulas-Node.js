const nome = 'Eduardo';
const sobrenome = 'Augusto'

const falaNome = () => nome + ' ' + sobrenome;

//maneira de exportar utilizando o node
// module.exports.nome = nome;
// module.exports.sobrenome = sobrenome;
// module.exports.falaNome = falaNome;

//exportar de maneira mais simples
exports.nome = nome;
exports.sobrenome = sobrenome;
exports.falaNome = falaNome;

//também é possivel exportar com o this
this.qualquerCoisa = 'Qualquer coisa'
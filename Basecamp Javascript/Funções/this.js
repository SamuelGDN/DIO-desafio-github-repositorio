function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}

const pessoa1 = {
    nome: 'Lucas',
    idade: 27,
}
const pessoa2 = {
    nome: 'Rosa',
    idade: 40,
}
const pessoa3 = {
    nome: 'Wilton',
    idade: 19,
};


console.log(calculaIdade.call(pessoa3, 25))
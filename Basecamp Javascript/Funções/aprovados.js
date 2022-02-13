const alunos = [
	{
		nome: 'João',
		nota: 5,
		turma: '1B',
	},
	{
		nome: 'Sofia',
		nota: 9,
		turma: '1B',
	},
	{
		nome: 'Paulo',
		nota: 2,
		turma: '2C',
	},
    {
		nome: 'Samuel',
		nota: 10,
		turma: '8F',
	},
];

function alunosAprovados(alunos, media) {
  let arrayaux = [];
  for (i = 0; i < alunos.length; i++) {
      let {nota , nome} = alunos[i]
      if (nota >= media){
        arrayaux.push(nome)
      }
  }

  return arrayaux;
}

console.log(alunosAprovados(alunos, 8))


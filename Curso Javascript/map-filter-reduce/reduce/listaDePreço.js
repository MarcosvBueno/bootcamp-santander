lista = [
	{
		preco: 2,
		nome: 'banana',
	},
	{
		preco: 30,
		nome: 'camiseta',
	},
	{
		preco: 25,
		nome: 'toalha',
	},
];

const saldoDisponivel = 100;

function calculaSaldo(saldoDisponivel, lista) {
  return lista.reduce(function (prev, current){
    console.log({prev})
    console.log({current})

    return prev - current.preco
  },saldoDisponivel)
}

console.log(calculaSaldo(saldoDisponivel, lista))
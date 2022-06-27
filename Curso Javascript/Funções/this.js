function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}

const pessoa1 = {
  nome: "Maria",
  idade: 30,
};

const pessoa2 ={
  nome: "Paulo",
  idade: 32,
};

const animal ={
  nome:"pepy",
  idade: 7,
  raca: "pug"
};

console.log(calculaIdade.call(animal,7))
console.log(calculaIdade.call(animal,[12]))
// Spread com objeto
const funcionario = { nome: 'Maria', salario: 12348.99 }
const clone = { ativo: true, ...funcionario }
console.log(clone) // { ativo: true, nome: 'Maria', salario: 12348.99 }

// Spread com Array
const grupoA = ['João', 'Pedro', 'Gloria']
const grupoFinal = ['Maria', 'Rafaela', ...grupoA]
console.log(grupoFinal) //[ 'Maria', 'Rafaela', 'João', 'Pedro', 'Gloria' ]

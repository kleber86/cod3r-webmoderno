const { tmpdir } = require("os")

// Não aceita repetição e não é indexada
const times = new Set()
times.add('Sport')
times.add('Nautico')
times.add('Santa Cruz')
times.add('Sport')

console.log(times) // Set { 'Sport', 'Nautico', 'Santa Cruz' }
console.log(times.size)
console.log(times.has('sport')) // false
console.log(times.has('Sport')) // true

const nomes = ['Raquel', 'Lucas', 'Julia', 'Lucas']
const nomeset = new Set(nomes)
console.log(nomeset) // Set { 'Raquel', 'Lucas', 'Julia' }

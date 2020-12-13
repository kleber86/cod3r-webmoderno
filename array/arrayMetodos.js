const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']

pilotos.pop() // Remove o ultimo element
console.log(pilotos) // [ 'Vettel', 'Alonso', 'Raikkonen' ]

pilotos.push('Verstappen') // Adiciona na ultima posição
console.log(pilotos) // [ 'Vettel', 'Alonso', 'Raikkonen', 'Verstappen' ]

pilotos.shift() // Remove o primeiro elemento.
console.log(pilotos) // [ 'Alonso', 'Raikkonen', 'Verstappen' ]

pilotos.unshift('Hamilton') // Adiciona no primeiro elemento
console.log(pilotos) // [ 'Hamilton', 'Alonso', 'Raikkonen', 'Verstappen' ]

// Adiciona
pilotos.splice(2, 0, 'Botas', 'Massa')
console.log(pilotos)

// Remover
pilotos.splice(3, 1)
console.log(pilotos) //[ 'Hamilton', 'Alonso', 'Botas', 'Raikkonen', 'Verstappen' ]

const alunsPilotos1 = pilotos.slice(2) // Cria um novo array a partir de um indice
console.log(alunsPilotos1) // [ 'Botas', 'Raikkonen', 'Verstappen' ]

const algunsPilotos2 = pilotos.slice(1, 4) // Retorna um novo array do indice informado até uma posição anterior ao segundo indice informado.
console.log(algunsPilotos2) // [ 'Alonso', 'Botas', 'Raikkonen' ]


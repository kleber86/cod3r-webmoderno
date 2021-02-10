const tecnologias = new Map()
tecnologias.set('react', {framework: false})
tecnologias.set('angular', { framework: true })

console.log(tecnologias.react) // undefined
console.log(tecnologias.get('react').framework) // false

const chavesVariadas = new Map([
    [function(){}, 'Função'],
    [{}, 'Objeto'],
    [123, 'Numero'],
])
chavesVariadas.forEach((vl, ch) => {
    console.log(ch, vl)
})

console.log(chavesVariadas.has(123)) // 123 Numero
chavesVariadas.delete(123) // true
console.log(chavesVariadas.has(123)) // false
console.log(chavesVariadas.size) // 2
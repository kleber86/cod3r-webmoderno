console.log(typeof Array, typeof new Array, typeof []) // function object object


let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados) // [ 'Bia', 'Carlos', 'Ana' ]

aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados[0]) // Bia
console.log(aprovados[1]) // Carlos
console.log(aprovados[3]) // undefined

aprovados[3] = 'Paulo'
aprovados.push('Carla')
console.log(aprovados) // [ 'Bia', 'Carlos', 'Ana', 'Paulo', 'Carla' ]
console.log(aprovados.length) // 5

aprovados[9] = 'Rafael'
console.log(aprovados) // [ 'Bia', 'Carlos', 'Ana', 'Paulo', 'Carla', <4 empty items>, 'Rafael' ]
console.log(aprovados.length) // 10

aprovados.sort() // Reorganiza o array. Aletera o array original
console.log(aprovados) // [ 'Ana', 'Bia', 'Carla', 'Carlos', 'Paulo', 'Rafael', <4 empty items> ]

delete aprovados[1] // Exclui o elemento com indice 1
console.log(aprovados) // [ 'Ana', < 1 empty item >, 'Carla', 'Carlos', 'Paulo', 'Rafael', < 4 empty items >]

aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(1, 2)
console.log(aprovados) // [ 'Bia' ]


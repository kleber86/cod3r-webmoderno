let valor 
console.log(valor) // undefined
//console.log(valor2) // ReferenceError: valor2 is not defined

valor = null
console.log(valor) // null -> ausência de valor
//console.log(valor.toString()) // TypeError: Cannot read property 'toString' of null

const produto = {}
console.log(produto) // {}
console.log(produto.preco) // undefined
produto.preco = 3.50
console.log(produto) // { preco: 3.5 }

produto.preco = null 
console.log(produto.preco) // null -> sem valor
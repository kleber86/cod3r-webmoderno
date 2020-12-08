/**
 * O Hoisting é aplicando utilizando o var
 */
console.log('a: ', a) // a:  undefined
var a = 2

console.log('a: ', a) // a:  2

console.log('b: ', b) // ReferenceError: Cannot access 'b' before initialization
let b = 0 // Não chega a ser executando porque a instrução acima apresenta erro.
console.log('b: ', b) // Não chega a ser executando
let isAtivo = false
console.log(isAtivo) // false

isAtivo = true
console.log(isAtivo) // true

isAtivo = 1
console.log(!isAtivo) // false ! Negação logica
console.log(!!isAtivo) // true

console.log(!true) // false
console.log(!false) // true

console.log("Os valores são verdadeiros")
console.log(!!3) // true
console.log(!!-1) // true
console.log(!!' ') // true
console.log(!!'Texto') // true
console.log(!![]) // true
console.log(!!{}) // true
console.log(!!Infinity) // true
console.log(!!(isAtivo = true)) // true

console.log("Os valores são falsos")
console.log(!!0) // false
console.log(!!'') // false
console.log(!!null)// false
console.log(!!NaN) // false
console.log(!!undefined) // false
console.log(!!(isAtivo = false)) // false

console.log(!!('' || null || 0 ||' ')) // true
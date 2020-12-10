console.log(soma(3, 4)) // 7
// Function declaration
function soma(x, y) {
    return x + y
}

// Function expression
const sub = function (x, y) {
    return x - y
}
console.log(sub(3, 4)) // -1

// Named Function Expression
const mult = function mult(x, y) {
    return x * y
}
console.log(mult(3, 4)) // 12
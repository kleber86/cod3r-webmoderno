console.log(typeof String) // function
console.log(typeof Array) // function
console.log(typeof Object) // function

String.prototype.reverse = function () {
    return this.split('').reverse().join('')
}

console.log('Escola Cod3r'.reverse()) // r3doC alocsE

Array.prototype.first = function () {
    return this[0]
}
console.log([1,2,3,4].first()) // 1
console.log([a,b,c,d].first()) // a

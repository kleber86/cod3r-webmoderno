console.log(module.exports === this) // true
console.log(module.exports === exports) // true

this.a = 1
exports.b = 2
module.exports.c = 3

exports = null
console.log(module.exports) // { a: 1, b: 2, c: 3 }
console.log(exports) // null
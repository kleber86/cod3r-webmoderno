const a = 1
const b = 2
const c = 3

const obj1 = { a: a, b: b, c: c }
const obj2 = { a, b, c}
console.log(obj1) // { a: 1, b: 2, c: 3 }
console.log(obj2) // { a: 1, b: 2, c: 3 }

const nomeAttr = 'nota'
const valorAttr = 7.87

const obj3 = {}
obj3[nomeAttr] = nomeAttr
console.log(obj3) // { nota: 'nota' }

const obj4 = {[nomeAttr] : valorAttr}
console.log(obj4) // { nota: 7.87 }

const obj5 = {
    funcao1: function() {
        
    },
    funcao2: function () {
        
    }
}
console.log(obj5) // { funcao1: [Function: funcao1], funcao2: [Function: funcao2] }
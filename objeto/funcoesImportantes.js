const pessoa = {
    nome: 'Rebeca',
    idade: 19,
    peso: 50
}
console.log(Object.keys(pessoa)) // [ 'nome', 'idade', 'peso' ]
console.log(Object.values(pessoa)) // [ 'Rebeca', 19, 50 ]
console.log(Object.entries(pessoa)) // [ [ 'nome', 'Rebeca' ], [ 'idade', 19 ], [ 'peso', 50 ] ]

Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave} : ${valor}`)
});

Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true,
    writable: false,
    value: '01/01/2020'
})
pessoa.dataNascimento = '01/01/2017'
console.log(pessoa.dataNascimento) // 01/01/2020

// Object.assign // ES 2015
const dest = { a: 1}
const o1 = { b: 2}
const o2 = {c: 3, d: 4}
const obj = Object.assign(dest, o1, o2)
console.log(obj) //{ a: 1, b: 2, c: 3, d: 4 }

Object.freeze(obj)
obj.c = 1234
console.log(obj) // { a: 1, b: 2, c: 3, d: 4 }
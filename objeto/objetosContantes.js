const pessoa = {
    nome: 'João'
}
console.log(pessoa) // { nome: 'João' }

pessoa.nome = 'Pedro'
console.log(pessoa) // { nome: 'Pedro' }

Object.freeze(pessoa)
pessoa.nome = 'Kleber'
console.log(pessoa) // { nome: 'Pedro' }
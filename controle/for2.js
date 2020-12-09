// for in
const notas = [6.7, 7.4, 9.8, 8.1, 7.7]

for(i in notas){
    console.log(`indice: ${i}, notas: ${notas[i]}`)
}

const pessoa = {
    nome: 'Ana',
    sobrenome: 'Silva',
    idade: 33,
    peso: 60
}

for(let atributo in pessoa){
    console.log(`${atributo} = ${pessoa[atributo]}`)
}

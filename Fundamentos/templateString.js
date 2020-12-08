const nome = 'Rebeca'
const contatenacao = 'Olá '+ nome + '!'
const template = `Olá ${nome}!`
console.log(contatenacao, template) // Olá Rebeca! Olá Rebeca!

// Expressões
console.log(`1 + 1 = ${1 + 1}`) // 1 + 1 = 2

const up = texto => texto.toUpperCase()
console.log(`Ei... ${up('Cuidado')}!`) // Ei... CUIDADO!


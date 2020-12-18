require('./global')

console.log(MinhaApp.saudacao()) // Estou em todos os lugares

MinhaApp.nome = 'Eita!' // Não irá atribuir por causa do freeze
console.log(MinhaApp.nome) // Sistema legal!

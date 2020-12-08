const prod1 = {}
prod1.nome = 'Celular Ultra Mega'
prod1.preco = 499.98
prod1['Desconto Legal'] = 0.40 // Evitar uso de espaços nos atributos
console.table(prod1)
/*
┌────────────────┬──────────────────────┐
│    (index)     │        Values        │
├────────────────┼──────────────────────┤
│      nome      │ 'Celular Ultra Mega' │
│     preco      │        499.98        │
│ Desconto Legal │         0.4          │
└────────────────┴──────────────────────┘
*/

const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.99
}

console.log(prod2) // { nome: 'Camisa Polo', preco: 79.99 }

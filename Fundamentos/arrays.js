const valoresAlunos = [7.7, 8.9, 6.3, 9.2]
console.log(valoresAlunos) // [ 7.7, 8.9, 6.3, 9.2 ]
console.table(valoresAlunos)
/**
┌─────────┬────────┐
│ (index) │ Values │
├─────────┼────────┤
│    0    │  7.7   │
│    1    │  8.9   │
│    2    │  6.3   │
│    3    │  9.2   │
└─────────┴────────┘
 */
console.log(valoresAlunos[0]) //7.7
console.log(valoresAlunos[5]) // undefined
valoresAlunos[10] = 10
console.log(valoresAlunos) // [ 7.7, 8.9, 6.3, 9.2, <6 empty items>, 10 ]
console.log(valoresAlunos.length) // 11
valoresAlunos.push({id: 3},false, null, 'teste')
console.table(valoresAlunos)
/**
┌─────────┬────┬─────────┐
│ (index) │ id │ Values  │
├─────────┼────┼─────────┤
│    0    │    │   7.7   │
│    1    │    │   8.9   │
│    2    │    │   6.3   │
│    3    │    │   9.2   │
│   10    │    │   10    │
│   11    │ 3  │         │
│   12    │    │  false  │
│   13    │    │  null   │
│   14    │    │ 'teste' │
└─────────┴────┴─────────┘
 */
console.log(valoresAlunos.pop()) // teste -> retira o ultimo elemento
console.log(typeof valoresAlunos) // object
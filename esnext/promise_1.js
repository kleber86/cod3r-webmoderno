const primeiroElemento = arrayOutString => arrayOutString[0]
const letraMinuscula = letra => letra.toLowerCase()

let p = new Promise(function(resolve){
    resolve(['Ana', 'Bia', 'Carlos'])
})
    .then(primeiroElemento)
    .then(primeiroElemento)
    .then(letraMinuscula)
    .then(console.log) //.then(v => console.log(v)) 
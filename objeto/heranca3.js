const mae = {nome: 'Ana', corCabelo: 'preta'}
const filha1 = Object.create(mae)
filha1.nome = 'Anna Maria'
console.log(filha1.corCabelo) // preta

const filha2 = Object.create(mae, {
    nome: { value: 'Bia', writable: false, enumerable: true }
})
console.log(filha2.corCabelo) // preta
filha2.nome = 'Carla'
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`) // Bia tem cabelo preta

console.log(Object.keys(filha1)) // [ 'nome' ]
console.log(Object.keys(filha2)) // [ 'nome' ]

for(let key in filha2){
    filha2.hasOwnProperty(key) ? 
        console.log(key) : console.log(`Por herança: ${key}`)
}
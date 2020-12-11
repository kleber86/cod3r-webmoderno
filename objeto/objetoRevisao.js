// Coleção dnamica de pares chave/valor
const produto = new Object
produto.nome = 'Cadeira'
produto['marca do produto'] = 'Generica'
produto.preco = 220

console.log(produto) // { nome: 'Cadeira', 'marca do produto': 'Generica', preco: 220 }
delete produto.preco
delete produto['marca do produto']
console.log(produto) // { nome: 'Cadeira' }

const carro = {
    modelo: 'A4',
    valor: 89000,
    proprietario: {
        nome: 'Raul',
        idade: 20,
        endereco:{
            logradouro: 'Rua ABC',
            numero: 123
        }
    },
    condutores: [
        {
            nome: 'Junior',
            idade: 19
        },
        {
            nome: 'Ana',
            idade: 30
        }
    ],
    calcularValorSeguro: function () {
        
    }
}

console.log(carro)
console.log(carro.condutores) // [ { nome: 'Junior', idade: 19 }, { nome: 'Ana', idade: 30 } ]

function criarProduto(nome, preco) {
    return{
        nome,
        preco,
        desconto: 0.1
    }
}

console.log(criarProduto()) // { nome: undefined, preco: undefined, desconto: 0.1 }
console.log(criarProduto('Camiseta Star Wars', 19.99)) // { nome: 'Camiseta Star Wars', preco: 19.99, desconto: 0.1 }
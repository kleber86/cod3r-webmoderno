 // ES 2015

 const pessoa = {
     nome: 'Ana',
     idade: 19,
     endereco: {
         logradouro: 'Rua ABC',
         numero: 100
     }
 }

 const { nome, idade } = pessoa
 console.log(nome) // Ana
 console.log(idade) // 19

 const { nome: n, idade: i} = pessoa
 console.log(n) // Ana
 console.log(i) // 19

 const { sobreNome, bemHumorada = true } = pessoa
 console.log(sobreNome) // undefined
 console.log(bemHumorada) // true

 const { endereco: { logradouro, numero, cep }} = pessoa
 console.log(logradouro, numero, cep) // Rua ABC 100 undefined
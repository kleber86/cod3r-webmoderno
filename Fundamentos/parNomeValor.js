const saudacao = 'Opa' // Contexto léxico (Contexto onde foi definido)

function exec(){
    const saudacao = 'Falaaa' // Outro context léxico
    return saudacao
}

// Objetos são grupos aninhandos de pares nome/valor
const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco:{
        logradouro: 'Rua Muito Legal',
        numero: 123
    }
}

console.log(saudacao) // Opa
console.log(exec()) // Falaa
console.log(cliente)
/**
{
  nome: 'Pedro',
  idade: 32,
  peso: 90,
  endereco: { logradouro: 'Rua Muito Legal', numero: 123 }
}
 */
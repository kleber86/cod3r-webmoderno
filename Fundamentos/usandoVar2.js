var numero = 1
{
    // Var - Não existem escopo de bloco
    var numero = 2
    console.log('Dentro =', numero)
}
console.log('fora = ', numero)
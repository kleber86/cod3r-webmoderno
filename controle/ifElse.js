const imprimirResultado = function(nota){
    if(nota >= 7){
        console.log('Aprovado')
    }else{
        console.log('Reprovado')
    }
}

imprimirResultado(7) // Aprovado
imprimirResultado(4) // Reprovado
imprimirResultado('Epa..') // Reprovado -> O JS(Fracamente tipada) irá tentar comprar uma string com um numero.
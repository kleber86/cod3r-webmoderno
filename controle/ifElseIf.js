Number.prototype.entre = function(inicio, fim){
    return this >= inicio && this <= fim
}

const imprimirResultado = function(nota){
    if(nota.entre(9, 10)){
        console.log('Quandro de honra')
    }else if(nota.entre(7, 8.99)){
        console.log('Aprovado')
    }else if(nota.entre(4, 6.99)){
        console.log('Recuperação')
    }else if (nota.entre(0, 3.99)){
        console.log('Reprovado')
    }else{
        console.log('Nota invalida')
    }

    console.log('Fim')
}

imprimirResultado(10) // Quandro de honra
imprimirResultado(8.9) // Aprovado
imprimirResultado(6) // Recuperação
imprimirResultado(-1) // Nota invalida
imprimirResultado(0) // Reprovado
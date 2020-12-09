const imprimirResultado = function(nota){
    switch(Math.floor(nota)){
        case 10:
        case 9:
            console.log('Quadro de Honra')
            break
        case 8: case 7:
            console.log('Aprovado')
            break
        case 6: case 5: case 4:
            console.log('Recuperação')
            break
        case 3: case 2: case 0:
            console.log('Reprovado')
            break
        default:
            console.log('Nota invalida')
    }
}

imprimirResultado(10) // Quadro de Honra
imprimirResultado(8) // Aprovado
imprimirResultado(5) // Recuperação
imprimirResultado(0) // Reprovado
imprimirResultado(-1) //Nota invalida
imprimirResultado(11) //Nota invalida
function soBoaNoticia(nota){
    if(nota >= 7){
        console.log('Passou!', nota)
    }
}

soBoaNoticia(8.1) //Passou! 8.1
soBoaNoticia(6.9) // Condição não atendida


function seForVerdadeEuMostro(valor){
    if(valor){
        console.log('É verdade... ', valor)
    }
}

seForVerdadeEuMostro() // Condição não atendida
seForVerdadeEuMostro(null) // Condição não atendida
seForVerdadeEuMostro(undefined) // Condição não atendida
seForVerdadeEuMostro(NaN) // Condição não atendida
seForVerdadeEuMostro('') // Condição não atendida
seForVerdadeEuMostro(0)  // Condição não atendida
seForVerdadeEuMostro(-1) // É verdade...  -1
seForVerdadeEuMostro(' ') // É verdade...   
seForVerdadeEuMostro('?') // É verdade...  ?
seForVerdadeEuMostro([]) // É verdade...  []
seForVerdadeEuMostro([1, 2]) // É verdade...  [ 1, 2 ]
seForVerdadeEuMostro({}) // É verdade...  {}
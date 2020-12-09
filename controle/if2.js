function teste1(num){
    if (num > 7) 
        console.log(num) // Apenas este está associado ao bloco if
    console.log('Final') // Final - Fora do escopo do if.
    
}

teste1(6) // 8
teste1(8) // Final

function teste2(num2){
    if(num2 > 7); // Cuidado com o uso de ";" nas estruturas de controle.
    {
        console.log(num2)
    }
}

teste2(6) // 6
teste2(8) // 8
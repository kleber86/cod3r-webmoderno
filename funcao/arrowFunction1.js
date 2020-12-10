// Função Tradicional
let dobro = function(a){
    return 2 * a
}

// Função Arrow #1
dobro = (a) => {
    return 2 * a
}

// Função Arrow #2
dobro = a => 2 * a
console.log(dobro(Math.PI)) // 6.283185307179586

// Função Tradicional
let ola = function(){
    return 'Olá'
}

// Função Arrow #3
ola = () => 'Olá'
ola = _ => 'Olá'
console.log(ola()) // Olá
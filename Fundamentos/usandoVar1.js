{ 
    { 
        { 
            var sera = 'Será?' 
        } 
    } 
}
console.log(sera) // Será?

function test() {
    // Var tem Escopo de Função e Global
    var local = 123
    console.log(local)
}
test() // 123
//console.log(local) //ReferenceError: local is not defined
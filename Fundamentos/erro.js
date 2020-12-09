function lancarError(e){
    //throw new Error('Error')
    //throw 12
    throw{
        name: "Error 01"
    }
}

function imprimirResultado(obj){

    try {
        console.log(obj.name.toUpperCase())
    } catch (error) {
        lancarError(error)
    } finally{
        console.log("Executado de qualquer forma.")
    }

}
const obj = { nome: 'Kleber' }
imprimirResultado(obj)
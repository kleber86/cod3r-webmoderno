// Cadeia de protótipos 
Object.prototype.attr0 = '0'
const avo = { attr1: 'A' }
const mae = { __proto__: avo, attr2: 'B' }
const filha = { __proto__: mae, attr3: 'C' }

console.log(filha.attr0, filha.attr1, filha.attr2, filha.attr3) // 0 A B C

const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta){
        if(this.velAtual + delta <= this.velMax){
            this.velAtual += delta
        }else{
            this.velAtual = this.velMax
        }
    },
    status(){
        return `${this.velAtual}Km/h de ${this.velMax}Km/h`
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: 324
}

const  volvo = {
    modelo: 'V40',
    status(){
        return `${this.modelo}: ${super.status()}`
    }
}

Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)

console.log(ferrari) // { modelo: 'F40', velMax: 324 }
console.log(volvo) // { modelo: 'V40', status: [Function: status] }

volvo.acelerarMais(100)
console.log(volvo.status()) // V40: 100Km/h de 200Km/h

ferrari.acelerarMais(300)
console.log(ferrari.status()) // 300Km/h de 324Km/h
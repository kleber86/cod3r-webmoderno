function MeuObjeto(){
    console.log(MeuObjeto.prototype)
}

const obj1 = new MeuObjeto
const obj2 = new MeuObjeto
console.log(obj1.__proto__ === obj2.__proto__) // true
console.log(MeuObjeto.prototype === obj1.__proto__) // true

MeuObjeto.prototype.nome = 'Anonimo'
MeuObjeto.prototype.falar = function() {
    console.log(`Bom dia! Meu nome é: ${this.nome}!`) // Bom dia! Meu nome é: Anonimo!
}

obj1.falar()

obj2.nome = 'Rafael'
obj2.falar() // Bom dia! Meu nome é: Rafael!

const obj3 = {}
obj3.__proto__ = MeuObjeto.prototype
obj3.nome = 'Obj3'
obj3.falar() // Bom dia! Meu nome é: Obj3!

// Resumo
console.log((new MeuObjeto).__proto__ === MeuObjeto.prototype) // true
console.log(MeuObjeto.__proto__ === Function.prototype) // true
console.log(Function.prototype.__proto__ === Object.prototype) // true
console.log(Object.prototype.__proto__ === null) // true
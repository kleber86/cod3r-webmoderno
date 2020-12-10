const pessoa = {
    saudacao: 'Bom dia',
    falar(){
        console.log(this.saudacao)
    }
}

pessoa.falar() // Bom dia!
const falar = pessoa.falar
falar() // Conflito entre paradigmaas: Funcional e OO

const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa() // Bom dia

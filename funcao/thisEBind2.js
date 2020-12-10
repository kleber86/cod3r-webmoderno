function Pessoa(){
    this.idade = 0


    // Com bind
    setInterval(function () {
        this.idade++
        console.log(this.idade)
    }.bind(this), 1000)

    // Com self
    const self = this
    setInterval(function () {
        this.idade++
        console.log(`setInterval com self ${self.idade}`)
    }, 1000)
}

new Pessoa
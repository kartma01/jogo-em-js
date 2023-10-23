
class personagem{
    constructor(nome,idade,tipo){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
        this.ataque = "nada"
        if (this.tipo == "mago" ){
            this.ataque = "magia"
        }else if (tipo == "guerreiro"){
            this.ataque = "espada"
        }else if (tipo == "monge"){
            this.ataque = "artes marciais"
        }else if (tipo == "ninja"){
            this.ataque = "shuriken"
        }
    }

    escrever(){
        console.log(`o ${this.tipo} atacou usando ${this.ataque}`)
    }
}
let heroi = new personagem("karmta",22,"ninja")

heroi.escrever()

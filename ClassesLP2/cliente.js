module.exports = class Cliente {
    constructor(nome,idade,endereco,email){
        this.nome = nome
        this.idade = idade
        this.email = email
        this.endereco = endereco
        this.dataCadastro = new Date()
    }

    isAdult() {
        return this.idade >= 18
    }

    getFirstName(){
        return this.nome.split(" ")[0]
    }
}
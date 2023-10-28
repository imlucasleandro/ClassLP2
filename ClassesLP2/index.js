const Cliente = require('./cliente')
const Endereco = require('./endereco')


const Cliente1 = new Cliente("Luiz", 31, "contato@luiztools.com.br")
Cliente1.endereco = new Endereco("Tupis",125,"São Vicente","Gravatai","RS")
const Cliente2 = new Cliente("Pedro",5)
Cliente2.endereco = new Endereco("Pedro Vargas",55,"Salgado Fliho","Gravati","RS")

console.log(Cliente1.nome + " é adulto? " + Cliente1.isAdult())
console.log(Cliente1.nome+" mora em " + Cliente1.endereco)
console.log(Cliente2.nome + " é adulto? " + Cliente2.isAdult())
console.log(Cliente2.nome+" mora em "+ Cliente2.endereco)
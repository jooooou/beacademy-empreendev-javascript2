function Pessoa(nome, idade, peso) {
    this.nome = nome;
    this.idade = idade;
    this.peso = peso;
}

const marcelo = new Pessoa('Marcelo', 44)
console.log(Pessoa.prototype)
const joao = new Pessoa('João',40,80)
console.log(joao)

const x = 'x'
console.log(x.__proto__)

console.log("")

const notebook = {
    cor: 'preta',
    ano: 2022,
    specs: function(value){
        return `Este notebook custa R$${value},00; cor ${this.cor}; ano ${this.ano}`
    }
}

console.log(notebook)

const dell = {
    marca: `Dell`
}
// Configurando o notebook para ser prototype de dell, trazendo suas propriedades e métodos.
Object.setPrototypeOf(dell, notebook)

console.log(dell.specs(5000))

// 1 Proto = notebook, 2 Proto = constructor de obj
console.log(dell.__proto__.__proto__)

const macBook = {
    marca: 'Macbook'
} 

Object.setPrototypeOf(macBook,notebook)
console.log(macBook.specs(15000))
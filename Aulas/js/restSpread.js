
// rest
function getSum(...args){
    let total = 0
    for (const arg of args){
        total += arg // total = total + arg
    }
    return total
}

console.log(getSum(2,5,10,2))

// spread

const arr = [1,2,3]
const arr2 = [...arr,4]
console.log(arr2)

// merge
const array1 = [1,2,3]
const array2 = [4,5,6]
const mergeArrays = ['Marcelo',...array1,...array2,7]
console.log(mergeArrays)



// destructuring 

const carro = {
    marca: 'fiat',
    ano:2018,
    portas: 4,
}

//const marca = carro.marca    /// jeito antigo
//const ano = carro.ano
// console.log(marca)
// console.log(ano)

const {marca,ano,portas} = carro

console.log(`O carro é da marca: ${marca}, ano: ${ano}, de ${portas} portas.`)


const cliente = {
    nome: 'Marcelo',
    compras: {
        digitais: {
            livros: ['Dom Casmurro','O Cortiço'],
            filmes:['Senhor dos anéis','Matrix']
        },
        fisicas:{
            caderno:['Caderno']
        }
    }
}

// console.log(cliente.compras.digitais.livros)
// console.log(cliente.compras.digitais.filmes)

const {livros,filmes} = cliente.compras.digitais
console.log(livros)
console.log(filmes)
console.log(typeof livros)

// com arrays

const frutas = ['Banana','Uva','Morango']

// método antigo

const primeiraFruta = frutas[0]
const segundaFruta = frutas[1]
const terceiraFruta = frutas[2]

// metodo novo

const [primeira,segunda,terceira] = frutas
console.log(frutas)
console.log(primeira)
console.log(segunda)
console.log(terceira)
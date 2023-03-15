// setTimeout(função, milissegundos) // Função que recebe outra função como parâmetro (callback)

setTimeout(() => console.log('Resposta'),3000)

function show(){
    setTimeout(() => {
        console.log('Oi!')
    }, 2000)

    console.log('Até logo')
}

show()

const minhaPromise = new Promise((resolve, reject) => {
    let n = 9
    if (n > 10){
        resolve()
    } else {
        reject()
    }
})

minhaPromise.then(result => console.log('Resolveu')).catch(err => console.log('Errou')).finally(() => console.log('Finally'))

// fetch()

// const firstUser = (userId) => {
//     let response = fetch(`https://jsonplaceholder.typicode.com/todos/${userId}`)
//     .then(res => res.json())
//     .then(data => console.log(data))
// }

// firstUser(1)

const cep = '96065770'

fetch(`https://viacep.com.br/ws/${cep}/json/`)
.then(resposta => resposta.json())
.then(cep => {
    console.log(`Bairro: '${cep.bairro}' , Logradouro: '${cep.logradouro}'`)
})

// async/await

const firstUser = async (userId) => {
    let response = await fetch(`https://jsonplaceholder.typicode.com/todos/${userId}`)
    let resultJSON = await response.json()
    let title = await resultJSON.title
    console.log(title)
}

firstUser(1)

// Try / Catch

async function user() {
    try{
        let response = await fetch('https://jsonplaceholder.typicode.com/todos/5')
        let data = await response.json()
        console.log(data.title)
    }
    catch (error) {
        throw new Error('Algum erro na requisição')
    }
    finally {
        console.log('Acabou')
    }
}

user()

console.log('')

class customError {
    constructor(message){
        this.message = message
    }
}

function function1(){
    console.log('function1 executou!')
    try {
        console.log('function1 no try')
    } catch(error){
        throw new customError('Erro na function1')
    }
}

console.log('')

function function2(){
    console.log('Function2 executou')
    try {
        console.log('function2 no try')
    } catch (error){
        console.error('erro na function2 =>',error)
        throw new Error(error)
    }
    codigoB
}

function main(){
    console.log('main executou')
    try {
        function1()
        function2()
    } catch (error){
        console.log('erro na main -->', error)
    }
}

main()
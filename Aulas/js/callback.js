function hello(name){ // Callback
    console.log(name)  
}

function helloUser(chamando){
    chamando('Marcelo') // Dando valor ao atributo name do hello
}

helloUser(hello) // fazendo callback do hello, atribuindo ao chamando a função hello

// Evento

const callback = e => alert('Foi clickado')

window.addEventListener('click',callback) // Evento no window do tipo 'click' que chama a função callback que da um alert "Foi Clickado"
// Classes

const Foo = function(x) {
    this.x = x
}

const foo = new Foo('x')
console.log(foo)

class Book {
    constructor(title,year,author) {
        this.title = title
        this.year = year
        this.author = author
    }
}

const domCasmurro = new Book('Dom Casmurro',1899,'Machado de Assis')
console.log(domCasmurro)
const harryPotter = new Book ('Harry Potter',1997,'J.K. Rowling')
console.log(harryPotter)

// Cadastro dos livros

let bookList = []

bookList.push(domCasmurro,harryPotter) // adicionando elementos no array (push)
console.log(bookList)

for (let i = 0; i < bookList.length; i++) {
    console.log(`O livro ${i + 1} é '${bookList[i].title}'.`)
}

//

class CopaDoMundo {
    constructor(country,year){
        this.country = country
        this.year = year
    }
    showChampion(team){
        return `A copa do ${this.country} foi disputado no ano de ${this.year} e o campeão foi ${team}.`
    }
}

const copa86 = new CopaDoMundo('México',1986)
const copa70 = new CopaDoMundo('México',1970)
const champion86 = copa86.showChampion('Argentina')
const champion70 = copa70.showChampion('Brasil')

console.log(champion86)
console.log(champion70)
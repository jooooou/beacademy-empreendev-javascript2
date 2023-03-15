class Candidates {
    constructor(firstName,surname, cpf) {
        this.firstName = firstName
        this.surname = surname
        this.cpf = cpf
    }
}

class Masc extends Candidates {
    constructor(firstName,surname, cpf, reservista) {
        super(firstName, surname, cpf)
        this.reservista = reservista
    }
}

const candidate1 = new Masc('Marcelo','Vasques',123456789,true)
const candidate2 = new Candidates('Maria','Fulana',4564515187)

console.log(candidate1)
console.log(candidate2)
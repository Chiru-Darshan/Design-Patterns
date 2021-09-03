// Builder facets


class Person {
    constructor() {
        //address
        this.streetName = this.postcode = this.city = ''

        // employee
        this.company = this.annualIncome = this.position = ''
    }

    toString() {
        return `Person lives at ${this.streetName}, ${this.city} - ${this.postcode} \n` +
            `and works at ${this.company} as ${this.position} earning ${this.annualIncome}.`
    }
}

class PersonBuilder {
    constructor(person = new Person()) {
        this.person = person
    }

    get lives() {
        return new PersonAddressBuilder(this.person)
    }
    get works() {
        return new PersonJobBuilder(this.person)
    }

    build() {
        return this.person
    }
}

class PersonAddressBuilder extends PersonBuilder {
    constructor(person) {
        super(person)
    }

    at(streetName) {
        this.person.streetName = streetName
        return this
    }


    WithPostcode(postcode) {
        this.person.postcode = postcode
        return this
    }

    In(city) {
        this.person.city = city
        return this
    }
}


class PersonJobBuilder extends PersonBuilder {
    constructor(person) {
        super(person)

    }

    at(company) {
        this.person.company = company
        return this
    }
    asA(position) {
        this.person.position = position
        return this
    }
    earning(annualIncome) {
        this.person.annualIncome = annualIncome
        return this
    }
}


let person = new PersonBuilder()

let p = person
    .lives.at(' #544, 2nd stage bannimantap').In('Mysore').WithPostcode('570007')
    .works.at('XXX Company').asA('Software Engineer').earning('12000')
    .build()
console.log(p.toString())
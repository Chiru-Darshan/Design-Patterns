class Person {
    constructor(name, address) {
        this.name = name
        this.address = address
    }

    toString() {
        return `${this.name} lives at ${this.address}`
    }

    deepCopy() {
        return new Person(
            this.name,
            this.address.deepCopy()
        )
    }
}
class Address {
    constructor(street, city, country) {
        this.street = street
        this.city = city
        this.country = country
    }
    toString() {
        return `${this.street} in ${this.city}, ${this.country}`
    }
    deepCopy() {
        return new Address(this.street, this.city, this.country

        )
    }
}

let john = new Person('John', new Address('#45 Angel St', 'London', 'UK'))
let jane = john.deepCopy()
console.log(john.toString())
jane.name = "Jane"
console.log(jane.hasOwnProperty('name'))
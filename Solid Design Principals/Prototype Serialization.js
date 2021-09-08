class Person {
    constructor(name, address) {
        this.name = name
        this.address = address
    }

    toString() {
        return `${this.name} lives at ${this.address}`
    }

    greet() {
        return `Hi, My name is ${this.name}, ` +
            `i live at ${this.address.toString()}`
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

class Serialization {
    constructor(types) {
        this.types = types
    }

    makeRecursive(object) {
        let idx = this.types.findIndex(t => t.name === object.constructor.name)

        if (idx !== -1) {
            object['typeIndex'] = idx
            for (let key in object) {

                if (object.hasOwnProperty(key)) {
                    this.makeRecursive(object[key])
                }
            }
        }

    }

    reconstructRecursive(object) {
        if (object.hasOwnProperty('typeIndex')) {
            let type = this.types[object['typeIndex']]
            let obj = new type()
            for (let key in object) {
                if (object.hasOwnProperty(key) && object[key] !== null) {
                    obj[key] = this.reconstructRecursive(object[key])
                }

            }
            delete obj.typeIndex
            return obj
        }
        return object
    }
    clone(object) {
        this.makeRecursive(object)
        let copy = JSON.parse(JSON.stringify(object))
        return this.reconstructRecursive(copy)

    }
}

let john = new Person('John', new Address('#45 Angel St', 'London', 'UK'))
// let jane = john.deepCopy()
// console.log(john.greet())
// jane.name = "Jane"
// console.log(jane.toString())
let s = new Serialization([Person, Address])
let jane = s.clone(john)
console.log(john.greet())
jane.name = "Jane"
console.log(jane.greet())
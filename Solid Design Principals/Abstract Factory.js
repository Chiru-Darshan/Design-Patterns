const readline = require('readline')
let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

class HotDrinks {
    constructor() {
        if (this.constructor.name === 'HotDrinks') {
            throw new Error(' HotDrinks is Abstract!')
        }
    }
    consume() {}
}

class Tea extends HotDrinks {
    consume() {
        console.log(`This tea is nice with lemon !`)
    }
}
class Coffee extends HotDrinks {
    consume() {
        console.log(`This tea is nice with lemon !`)
    }
}

class HotDrinksFactory {
    constructor() {
        if (this.constructor.name === 'HotDrinksFactory') {
            throw new Error(' HotDrinksFactory is Abstract!')
        }
    }
    prepare(amount) {}
}

class TeaFactory extends HotDrinksFactory {
    prepare(amount) {
        console.log(`put in tea bag, boil water, pour ${amount}`)
        return new Tea()
    }
}

class CoffeeFactory extends HotDrinksFactory {
    prepare(amount) {
        console.log(`Grind some beans, boil water, pour ${amount}`)
        return new Coffee()
    }
}

const AvailableDrinks = Object.freeze({
    tea: TeaFactory,
    coffee: CoffeeFactory,
})

class HotDrinksMachine {
    constructor() {
        this.factories = {

        }
        for (let drink in AvailableDrinks) {
            this.factories[drink] = new AvailableDrinks[drink]();
        }

    }

    interact() {
        rl.question('Which Drinks ? eg: Tea 50=> ', (answer) => {
            let name = answer.split(' ')[0]
            let amount = parseInt(answer.split(' ')[1])
            let d = this.factories[name].prepare(amount);
            rl.close()
            return d;
        })
    }
    makeDrink(type) {
        switch (type) {
            case 'Tea':
                return new TeaFactory().prepare(200)
                break;
            case 'Coffee':
                return new CoffeeFactory().prepare(500)
                break;
            default:
                throw new Error()
        }
    }
}


let machine = new HotDrinksMachine()
// rl.question('which drinks ? ', function (answer) {
//     let drink = machine.makeDrink(answer);
//     drink.consume()
//     rl.close()
// })

machine.interact()
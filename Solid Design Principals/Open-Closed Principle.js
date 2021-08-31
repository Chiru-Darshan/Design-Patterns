let Color = Object.freeze({
    red: "red",
    green: 'green',
    blue: "blue",
})


let Size = Object.freeze({
    small: 'small',
    medium: 'medium',
    large: 'large',
})


class Product {
    constructor(name, size, color) {
        this.name = name;
        this.size = size;
        this.color = color;
    }

    // open-closed class : open for extension but closed for modification
}

class ProductFilter {


    filterByColor(items, color) {

        return items.filter(p => p.color === color)
    }
    filterBySize(items, size) {

        return items.filter(p => p.size === size)
    }
    filterBySize(items, name) {

        return items.filter(p => p.name === name)
    }

    filterBySizeAndColor(items, size, color) {
        return items.filter(p => (p.size === size) && (p => p.color === color))
    }
    // this will lead to state space of explosion
    // to come out of this situation, need to use inheritance or other methods
}

let apple = new Product('Apple', Size.large, Color.green)
let tree = new Product('Tree', Size.medium, Color.blue)
let house = new Product('House', Size.large, Color.green)

let products = [apple, tree, house]
console.log(` Green Color Products (Old) : `)
let pf = new ProductFilter()
for (let item of pf.filterByColor(products, Color.green)) {
    console.log(`   * ${item.name} is ${Color.green} color.`)
}


//Specification Class


class ColorSpecification {
    constructor(color) {
        this.color = color
    }

    isSatisfied(item) {
        return item.color === this.color
    }
}


class SizeSpecification {
    constructor(size) {
        this.size = size
    }

    isSatisfied(item) {
        return item.size === this.size
    }
}

class BetterFilter {
    filter(items, spec) {
        return items.filter(x => spec.isSatisfied(x))
    }
}


class AndSpecification {
    constructor(...specs) {
        this.specs = specs
    }

    isSatisfied(item) {
        return this.specs.every(x => x.isSatisfied(item))
    }
}

let bf = new BetterFilter();
console.log(` Green Color Products (new) : `)
for (let item of bf.filter(
        products,
        new ColorSpecification(Color.green)
    )) {
    console.log(`   * ${item.name} is ${Color.green} color.`)
}

console.log(` Blue  Color and Large Size Products : `)
let spec = new AndSpecification(
    new ColorSpecification(Color.blue),
    new SizeSpecification(Size.medium)
)
for (let item of bf.filter(
        products,
        spec
    )) {
    console.log(`   * ${item.name} is ${Color.green} color and ${item.size}.`)
}
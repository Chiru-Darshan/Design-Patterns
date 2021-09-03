const Relationship = Object.freeze({

    parent: 0,
    child: 1,
    siblings: 2,
})


class RelationshipBrowser {
    constructor() {
        if (this.constructor.name === 'RelationshipBrowser')
            throw new error(' RelationshipBrowser is Abstract ! ')
    }

    findAllChildren(name) {}
}


class Relationships extends RelationshipBrowser {
    constructor() {
        super()
        this.data = []
    }

    addParentAndChildRelationship(parent, child) {
        this.data.push({
            from: parent,
            type: Relationship.parent,
            to: child
        })
    }

    findAllChildren(name) {
        return this.data.filter(rel => rel.from.name === name && rel.type === Relationship.parent).map(r => r.to)
    }

}


class Research {
    // constructor(relationship) {
    //     this.data = relationship.data;
    //     for (let p of this.data.filter(rel => rel.from.name === 'John' && rel.type === Relationship.parent)) {
    //         console.log(` * John is parent of ${p.to.name}`)
    //     }
    // }

    constructor(browser, name) {
        for (let p of browser.findAllChildren(name)) {
            console.log(` * ${name} is parent of ${p.name}`)
        }
    }
}


class Person {
    constructor(name) {
        this.name = name
    }
}

let p1 = new Person('John')
let p2 = new Person('Harish')
let p3 = new Person('Mahesh')
let relationship = new Relationships()
relationship.addParentAndChildRelationship(p1, p2)
relationship.addParentAndChildRelationship(p1, p3)
let browse = new Research(relationship, 'John')
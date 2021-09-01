class Rectangle {
    constructor(width, height) {
        this._width = width;
        this._height = height;
    }
    get width() {
        return this._width
    }
    get height() {
        return this._height
    }
    set width(value) {
        this._width = value
    }
    set height(value) {
        this._height = value
    }
    // use this instead of another class
    isSquare() {
        return this._width === this._height
    }

    area() {
        return this._width * this._height
    }
    toString() {
        return `${this._width} * ${this._height}`
    }
}

class Square extends Rectangle {
    constructor(size) {
        super(size, size);
    }
    set width(value) {
        this._width = this._height = value
    }
    set height(value) {
        this._height = this._width = value
    }
}

const useIt = (rc) => {

    let width = rc._width;
    rc._height = 10
    console.log(` i am expecting : ${10*width} \n but i got :${rc.area()}`)

}

let ob = new Square(5)
ob.width = 2
console.log(`The Area of Square ${ob.toString()} is ${ob.area()}`)

let rc = new Rectangle(3, 4)
useIt(rc)

let sq = new Square(9)
useIt(sq)